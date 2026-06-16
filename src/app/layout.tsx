import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-josefin-sans",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://szachrajesteticamedica.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dra. Szachraj Casco Mayra | Est\u00e9tica m\u00e9dica en Corrientes",
    template: "%s | Dra. Szachraj Casco Mayra",
  },
  description:
    "Consultorio de est\u00e9tica m\u00e9dica en Corrientes Capital. Atenci\u00f3n personalizada, tratamientos faciales y corporales, turnos por WhatsApp y ubicaci\u00f3n en Fray Jos\u00e9 de la Quintana 1272.",
  keywords: [
    "Dra. Szachraj Casco Mayra",
    "est\u00e9tica m\u00e9dica Corrientes",
    "medicina est\u00e9tica Corrientes",
    "tratamientos faciales Corrientes",
    "tratamientos corporales Corrientes",
    "mesoterapia Corrientes",
    "radiofrecuencia Corrientes",
    "consultorio est\u00e9tico Corrientes Capital",
  ],
  authors: [{ name: "Dra. Szachraj Casco Mayra" }],
  creator: "Dra. Szachraj Casco Mayra",
  publisher: "Dra. Szachraj Casco Mayra",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "/",
    siteName: "Dra. Szachraj Casco Mayra",
    title: "Dra. Szachraj Casco Mayra | Est\u00e9tica m\u00e9dica en Corrientes",
    description:
      "Atenci\u00f3n personalizada en est\u00e9tica m\u00e9dica, tratamientos faciales y corporales en Corrientes Capital.",
    images: [
      {
        url: "/hero-consulta.webp",
        width: 1381,
        height: 1139,
        alt: "Dra. Szachraj Casco Mayra atendiendo a una paciente",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dra. Szachraj Casco Mayra | Est\u00e9tica m\u00e9dica en Corrientes",
    description:
      "Consultorio de est\u00e9tica m\u00e9dica en Corrientes Capital. Turnos por WhatsApp.",
    images: ["/hero-consulta.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${josefinSans.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
