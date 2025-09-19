"use client"

import type React from "react"

import { useState, useRef, useCallback, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, Download, Type, Instagram, Twitter, MessageCircle, Plus, Trash2 } from "lucide-react"

interface TextElement {
  id: string
  text: string
  x: number
  y: number
  fontSize: number
  color: string
  fontFamily: string
  fontWeight: string
}

const templates = [
  { id: "brat-summer", name: "Brat Summer", image: "/brat-summer-meme-template.jpg" },
  { id: "charli-xcx", name: "Charli XCX Vibes", image: "/charli-xcx-brat-meme-template.jpg" },
  { id: "green-aesthetic", name: "Green Aesthetic", image: "/green-brat-aesthetic-meme-template.jpg" },
  { id: "brat-energy", name: "Brat Energy", image: "/brat-energy-meme-template.jpg" },
]

const fonts = [
  { value: "Impact", label: "Impact" },
  { value: "Arial", label: "Arial" },
  { value: "Helvetica", label: "Helvetica" },
  { value: "Comic Sans MS", label: "Comic Sans" },
  { value: "Times New Roman", label: "Times New Roman" },
]

const colors = [
  "#FFFFFF",
  "#000000",
  "#FF0000",
  "#00FF00",
  "#0000FF",
  "#FFFF00",
  "#FF00FF",
  "#00FFFF",
  "#FFA500",
  "#800080",
]

export function MemeEditor() {
  const [selectedImage, setSelectedImage] = useState<string>("")
  const [textElements, setTextElements] = useState<TextElement[]>([
    {
      id: "text-1",
      text: "TOP TEXT",
      x: 50,
      y: 20,
      fontSize: 32,
      color: "#FFFFFF",
      fontFamily: "Impact",
      fontWeight: "bold",
    },
    {
      id: "text-2",
      text: "BOTTOM TEXT",
      x: 50,
      y: 80,
      fontSize: 32,
      color: "#FFFFFF",
      fontFamily: "Impact",
      fontWeight: "bold",
    },
  ])
  const [selectedElement, setSelectedElement] = useState<string>("text-1")
  const [isDragging, setIsDragging] = useState<string | null>(null)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
  const fileInputRef = useRef<HTMLInputElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const previewRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    renderCanvas()
  }, [selectedImage, textElements])

  const handleImageUpload = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }, [])

  const handleTemplateSelect = useCallback((templateImage: string) => {
    setSelectedImage(templateImage)
  }, [])

  const updateTextElement = useCallback((id: string, updates: Partial<TextElement>) => {
    setTextElements((prev) => prev.map((el) => (el.id === id ? { ...el, ...updates } : el)))
  }, [])

  const addTextElement = useCallback(() => {
    const newId = `text-${Date.now()}`
    const newElement: TextElement = {
      id: newId,
      text: "NEW TEXT",
      x: 50,
      y: 50,
      fontSize: 32,
      color: "#FFFFFF",
      fontFamily: "Impact",
      fontWeight: "bold",
    }
    setTextElements((prev) => [...prev, newElement])
    setSelectedElement(newId)
  }, [])

  const deleteTextElement = useCallback(
    (id: string) => {
      setTextElements((prev) => prev.filter((el) => el.id !== id))
      if (selectedElement === id) {
        setSelectedElement(textElements[0]?.id || "")
      }
    },
    [selectedElement, textElements],
  )

  const handleMouseDown = useCallback(
    (e: React.MouseEvent, elementId: string) => {
      e.preventDefault()
      setIsDragging(elementId)
      setSelectedElement(elementId)

      const rect = previewRef.current?.getBoundingClientRect()
      if (rect) {
        const element = textElements.find((el) => el.id === elementId)
        if (element) {
          const elementX = (element.x / 100) * rect.width
          const elementY = (element.y / 100) * rect.height
          setDragOffset({
            x: e.clientX - rect.left - elementX,
            y: e.clientY - rect.top - elementY,
          })
        }
      }
    },
    [textElements],
  )

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging || !previewRef.current) return

      const rect = previewRef.current.getBoundingClientRect()
      const x = ((e.clientX - rect.left - dragOffset.x) / rect.width) * 100
      const y = ((e.clientY - rect.top - dragOffset.y) / rect.height) * 100

      updateTextElement(isDragging, {
        x: Math.max(0, Math.min(100, x)),
        y: Math.max(0, Math.min(100, y)),
      })
    },
    [isDragging, dragOffset, updateTextElement],
  )

  const handleMouseUp = useCallback(() => {
    setIsDragging(null)
  }, [])

  const renderCanvas = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas || !selectedImage) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const img = new Image()
    img.crossOrigin = "anonymous"
    img.onload = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw image
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height)

      // Draw text elements
      textElements.forEach((element) => {
        ctx.font = `${element.fontWeight} ${element.fontSize}px ${element.fontFamily}`
        ctx.fillStyle = element.color
        ctx.strokeStyle = "#000000"
        ctx.lineWidth = 2
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"

        const x = (element.x / 100) * canvas.width
        const y = (element.y / 100) * canvas.height

        // Add text stroke for better visibility
        ctx.strokeText(element.text.toUpperCase(), x, y)
        ctx.fillText(element.text.toUpperCase(), x, y)
      })
    }
    img.src = selectedImage
  }, [selectedImage, textElements])

  const selectedTextElement = textElements.find((el) => el.id === selectedElement)

  const downloadMeme = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    renderCanvas()

    setTimeout(() => {
      const link = document.createElement("a")
      link.download = "brat-meme.png"
      link.href = canvas.toDataURL("image/png")
      link.click()
    }, 100)
  }, [renderCanvas])

  const shareToSocial = useCallback((platform: string) => {
    const canvas = canvasRef.current
    if (!canvas) return

    canvas.toBlob((blob) => {
      if (!blob) return

      const file = new File([blob], "brat-meme.png", { type: "image/png" })

      if (navigator.share && navigator.canShare({ files: [file] })) {
        navigator.share({
          title: "Check out my Brat meme!",
          files: [file],
        })
      } else {
        const urls = {
          instagram: "https://www.instagram.com/",
          twitter: "https://twitter.com/intent/tweet?text=Check%20out%20my%20Brat%20meme!",
          whatsapp: "https://wa.me/?text=Check%20out%20my%20Brat%20meme!",
        }
        window.open(urls[platform as keyof typeof urls], "_blank")
      }
    })
  }, [])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Editor Controls */}
      <div className="lg:col-span-1 space-y-6">
        <Card className="gradient-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="h-5 w-5" />
              Image Source
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="image-upload">Upload Your Image</Label>
              <Input
                id="image-upload"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                ref={fileInputRef}
                className="mt-2"
              />
            </div>

            <div className="space-y-2">
              <Label>Or Choose a Template</Label>
              <div className="grid grid-cols-2 gap-2">
                {templates.map((template) => (
                  <button
                    key={template.id}
                    onClick={() => handleTemplateSelect(template.image)}
                    className="relative aspect-square rounded-lg overflow-hidden border-2 border-transparent hover:border-primary transition-colors"
                  >
                    <img
                      src={template.image || "/placeholder.svg"}
                      alt={template.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <span className="text-white text-xs font-medium text-center px-2">{template.name}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="gradient-card">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Type className="h-5 w-5" />
                Text Editor
              </div>
              <Button size="sm" onClick={addTextElement} className="gradient-bg text-white border-0 hover:opacity-90">
                <Plus className="h-4 w-4" />
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {textElements.map((element) => (
                  <div key={element.id} className="flex items-center gap-1">
                    <Button
                      variant={selectedElement === element.id ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedElement(element.id)}
                      className="text-xs"
                    >
                      Text {element.id.split("-")[1]}
                    </Button>
                    {textElements.length > 1 && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => deleteTextElement(element.id)}
                        className="p-1 h-8 w-8"
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    )}
                  </div>
                ))}
              </div>

              {selectedTextElement && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="text-content">Text Content</Label>
                    <Input
                      id="text-content"
                      value={selectedTextElement.text}
                      onChange={(e) => updateTextElement(selectedElement, { text: e.target.value })}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label>Font Size: {selectedTextElement.fontSize}px</Label>
                    <Slider
                      value={[selectedTextElement.fontSize]}
                      onValueChange={([value]) => updateTextElement(selectedElement, { fontSize: value })}
                      min={12}
                      max={72}
                      step={2}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="font-family">Font Family</Label>
                    <Select
                      value={selectedTextElement.fontFamily}
                      onValueChange={(value) => updateTextElement(selectedElement, { fontFamily: value })}
                    >
                      <SelectTrigger className="mt-2">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {fonts.map((font) => (
                          <SelectItem key={font.value} value={font.value}>
                            {font.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Text Color</Label>
                    <div className="grid grid-cols-5 gap-2 mt-2">
                      {colors.map((color) => (
                        <button
                          key={color}
                          onClick={() => updateTextElement(selectedElement, { color })}
                          className={`w-8 h-8 rounded border-2 ${
                            selectedTextElement.color === color ? "border-primary" : "border-border"
                          }`}
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label>Position X: {Math.round(selectedTextElement.x)}%</Label>
                    <Slider
                      value={[selectedTextElement.x]}
                      onValueChange={([value]) => updateTextElement(selectedElement, { x: value })}
                      min={0}
                      max={100}
                      step={1}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label>Position Y: {Math.round(selectedTextElement.y)}%</Label>
                    <Slider
                      value={[selectedTextElement.y]}
                      onValueChange={([value]) => updateTextElement(selectedElement, { y: value })}
                      min={0}
                      max={100}
                      step={1}
                      className="mt-2"
                    />
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Preview Canvas */}
      <div className="lg:col-span-2">
        <Card className="gradient-card">
          <CardHeader>
            <CardTitle>Preview (Drag text to reposition)</CardTitle>
          </CardHeader>
          <CardContent>
            <div
              ref={previewRef}
              className="relative bg-muted rounded-lg overflow-hidden cursor-crosshair select-none"
              style={{ aspectRatio: "1/1" }}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              {selectedImage ? (
                <div className="relative w-full h-full">
                  <img
                    src={selectedImage || "/placeholder.svg"}
                    alt="Meme base"
                    className="w-full h-full object-cover"
                    draggable={false}
                  />
                  {textElements.map((element) => (
                    <div
                      key={element.id}
                      className={`absolute cursor-move select-none ${
                        selectedElement === element.id ? "ring-2 ring-primary ring-opacity-50" : ""
                      }`}
                      style={{
                        left: `${element.x}%`,
                        top: `${element.y}%`,
                        transform: "translate(-50%, -50%)",
                        fontSize: `${element.fontSize}px`,
                        color: element.color,
                        fontFamily: element.fontFamily,
                        fontWeight: element.fontWeight,
                        textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        whiteSpace: "nowrap",
                      }}
                      onMouseDown={(e) => handleMouseDown(e, element.id)}
                    >
                      {element.text}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  <div className="text-center">
                    <Upload className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Upload an image or choose a template to get started</p>
                  </div>
                </div>
              )}
            </div>

            <canvas ref={canvasRef} className="hidden" width={800} height={800} />

            <div className="flex flex-wrap gap-4 mt-6">
              <Button onClick={downloadMeme} className="gradient-bg text-white border-0 hover:opacity-90">
                <Download className="h-4 w-4 mr-2" />
                Download Meme
              </Button>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => shareToSocial("instagram")}
                  className="flex items-center gap-2"
                >
                  <Instagram className="h-4 w-4" />
                  Instagram
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => shareToSocial("twitter")}
                  className="flex items-center gap-2"
                >
                  <Twitter className="h-4 w-4" />
                  Twitter
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => shareToSocial("whatsapp")}
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
