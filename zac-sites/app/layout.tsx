import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Zac — Websites without the tech headaches",
    description: "I build clean, fast, mobile-first sites for small businesses. Fixed price. Fast turnaround.",
    openGraph: {
        title: "Zac — Websites without the tech headaches",
        description: "Clean, fast websites for people who don’t do tech.",
        url: "https://yourdomain.com",
        siteName: "Zac Sites",
        images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Zac Sites" }],
        locale: "en_AU", type: "website",
    },
    metadataBase: new URL("https://yourdomain.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="scroll-smooth">
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "ProfessionalService",
                    "name": "Zac — Web Design",
                    "areaServed": "Melbourne",
                    "url": "https://yourdomain.com",
                    "image": "https://yourdomain.com/og.jpg",
                    "description": "I build clean, fast, mobile-first websites.",
                    "priceRange": "$",
                })
            }} />
            <body className="bg-slate-50 text-slate-900">{children}</body>
        </html>
    );
}
