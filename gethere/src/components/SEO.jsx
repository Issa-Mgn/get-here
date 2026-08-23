import { useEffect } from "react";

const DEFAULT_TITLE = "GetHere | Boutique mode, beauté et maison au Bénin";
const DEFAULT_DESCRIPTION = "GetHere, votre boutique en ligne à Porto-Novo : mode, beauté, accessoires et maison, avec livraison partout au Bénin.";

function upsertMeta(attribute, value, content) {
  let element = document.head.querySelector(`meta[${attribute}="${value}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, value);
    element.dataset.seo = "true";
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function upsertLink(rel, href) {
  let element = document.head.querySelector(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    element.dataset.seo = "true";
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
}

export default function SEO({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  noindex = false,
  image,
  type = "website",
  structuredData,
}) {
  useEffect(() => {
    const siteUrl = (import.meta.env.VITE_SITE_URL || window.location.origin).replace(/\/$/, "");
    const canonical = `${siteUrl}${window.location.pathname}`;
    const fullTitle = title.includes("GetHere") ? title : `${title} | GetHere`;

    document.title = fullTitle;
    upsertMeta("name", "description", description);
    upsertMeta("name", "robots", noindex ? "noindex, nofollow" : "index, follow");
    upsertMeta("property", "og:title", fullTitle);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:type", type);
    upsertMeta("property", "og:url", canonical);
    upsertMeta("property", "og:locale", "fr_BJ");
    if (image) upsertMeta("property", "og:image", image);
    upsertMeta("name", "twitter:card", image ? "summary_large_image" : "summary");
    upsertMeta("name", "twitter:title", fullTitle);
    upsertMeta("name", "twitter:description", description);
    upsertLink("canonical", canonical);

    document.head.querySelector('script[data-seo="structured-data"]')?.remove();
    if (structuredData) {
      const schema = document.createElement("script");
      schema.type = "application/ld+json";
      schema.dataset.seo = "structured-data";
      schema.textContent = JSON.stringify(structuredData);
      document.head.appendChild(schema);
    }
  }, [description, image, noindex, structuredData, title, type]);

  return null;
}