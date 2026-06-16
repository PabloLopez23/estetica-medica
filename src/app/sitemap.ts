import type { MetadataRoute } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://szachrajesteticamedica.netlify.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const sections = ["", "#tratamientos", "#experiencia", "#turnos", "#contacto"];

  return sections.map((section) => ({
    url: `${siteUrl}/${section}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: section === "" ? 1 : 0.8,
  }));
}
