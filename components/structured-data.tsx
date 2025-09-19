import Script from "next/script"

interface StructuredDataProps {
  type: "website" | "article" | "faq" | "webapp" | "breadcrumb" | "organization"
  data: any
}

export function StructuredData({ type, data }: StructuredDataProps) {
  const generateSchema = () => {
    switch (type) {
      case "website":
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "BratMemes - Viral Meme Generator",
          description:
            "Create viral Brat memes instantly with our easy-to-use generator. Choose from trending templates, add custom text, and share on social media.",
          url: "https://bratmemes.com",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://bratmemes.com/templates?search={search_term_string}",
            "query-input": "required name=search_term_string",
          },
          sameAs: ["https://twitter.com/bratmemes", "https://instagram.com/bratmemes"],
        }

      case "webapp":
        return {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "Brat Meme Generator",
          description: "Create viral Brat memes with our easy-to-use online generator tool",
          url: "https://bratmemes.com/meme-generator",
          applicationCategory: "MultimediaApplication",
          operatingSystem: "Web Browser",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
          },
          featureList: [
            "Upload custom images",
            "Choose from trending templates",
            "Add custom text with fonts and colors",
            "Download high-quality memes",
            "Share directly to social media",
          ],
        }

      case "article":
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: data.title,
          description: data.description,
          image: data.image,
          author: {
            "@type": "Person",
            name: data.author,
          },
          publisher: {
            "@type": "Organization",
            name: "BratMemes",
            logo: {
              "@type": "ImageObject",
              url: "https://bratmemes.com/logo.png",
            },
          },
          datePublished: data.datePublished,
          dateModified: data.dateModified || data.datePublished,
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": data.url,
          },
        }

      case "faq":
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: data.faqs.map((faq: any) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }

      case "breadcrumb":
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: data.items.map((item: any, index: number) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url,
          })),
        }

      case "organization":
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "BratMemes",
          url: "https://bratmemes.com",
          logo: "https://bratmemes.com/logo.png",
          description: "The ultimate destination for creating viral Brat memes",
          sameAs: [
            "https://twitter.com/bratmemes",
            "https://instagram.com/bratmemes",
            "https://facebook.com/bratmemes",
          ],
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer service",
            availableLanguage: ["English", "Hindi"],
          },
        }

      default:
        return null
    }
  }

  const schema = generateSchema()

  if (!schema) return null

  return (
    <Script
      id={`structured-data-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
