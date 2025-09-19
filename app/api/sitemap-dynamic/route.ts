import { NextResponse } from "next/server"

export async function GET() {
  // This will be used to dynamically generate sitemap entries
  // when you add new blog posts or templates

  const dynamicUrls = [
    // Future blog posts will be added here programmatically
    // Future templates will be added here programmatically
  ]

  return NextResponse.json(dynamicUrls)
}
