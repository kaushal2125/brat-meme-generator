import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get("q")

  if (!query) {
    return NextResponse.json({ error: "Query parameter required" }, { status: 400 })
  }

  // Mock search results - replace with actual search logic
  const mockResults = [
    {
      id: 1,
      title: "Brat Summer Meme Template",
      description: "Create viral Brat summer memes with this trending template",
      url: "/templates/brat-summer",
      type: "template",
    },
    {
      id: 2,
      title: "How to Create Viral Memes",
      description: "Learn the secrets of creating memes that go viral",
      url: "/blog/1",
      type: "blog",
    },
  ]

  const filteredResults = mockResults.filter(
    (result) =>
      result.title.toLowerCase().includes(query.toLowerCase()) ||
      result.description.toLowerCase().includes(query.toLowerCase()),
  )

  return NextResponse.json({
    query,
    results: filteredResults,
    total: filteredResults.length,
  })
}
