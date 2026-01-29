import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BURGERHAUS | Las Mejores Hamburguesas Gourmet",
  description:
    "Experimenta hamburguesas gourmet hechas con ingredientes premium. Carne 100% Angus, pan artesanal horneado diariamente, y sabores que nunca olvidarás.",
  keywords:
    "hamburguesas, hamburguesas gourmet, burgers, food, comida gourmet, restaurante, carne angus",
  authors: [{ name: "BurgerHaus" }],
  creator: "BurgerHaus",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://burgerhaus.com",
    siteName: "BurgerHaus",
    title: "BURGERHAUS | Las Mejores Hamburguesas Gourmet",
    description:
      "Experimenta hamburguesas gourmet hechas con ingredientes premium. Carne 100% Angus, pan artesanal horneado diariamente.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BurgerHaus - Hamburguesas Gourmet",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BURGERHAUS | Las Mejores Hamburguesas Gourmet",
    description:
      "Experimenta hamburguesas gourmet hechas con ingredientes premium.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${dmSerif.variable} ${inter.variable}`}>
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: "BurgerHaus",
              description:
                "Las mejores hamburguesas gourmet con ingredientes premium",
              servesCuisine: "Hamburguesas Gourmet",
              priceRange: "$$",
              image: "/og-image.jpg",
              address: {
                "@type": "PostalAddress",
                addressCountry: "ES",
              },
            }),
          }}
        />
        {/* Google Analytics 4 */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
