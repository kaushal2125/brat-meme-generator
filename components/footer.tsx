import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold text-gradient mb-4">BratMemes</div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Create viral Brat memes instantly with our easy-to-use generator. Choose from trending templates and share
              your creations with the world.
            </p>
            <p className="text-sm text-muted-foreground">Made with ❤️ for the meme community</p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/meme-generator" className="block text-muted-foreground hover:text-primary transition-colors">
                Meme Generator
              </Link>
              <Link href="/templates" className="block text-muted-foreground hover:text-primary transition-colors">
                Templates
              </Link>
              <Link href="/blog" className="block text-muted-foreground hover:text-primary transition-colors">
                Blog
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <div className="space-y-2">
              <Link href="/about" className="block text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/privacy" className="block text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="block text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">© 2024 BratMemes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
