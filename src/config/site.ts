export const siteConfig = {
    url: "https://example.com",
    title: "Astro Mistaro",
    description: "Long-lived, content-driven websites built with Astro.",
    author: "Chris Collins",
    locale: "en-GB",

    ogImage: "/og-image.jpg",

    links: {
        github: "https://github.com/chrissy-dev",
    },
} as const;

export type SiteConfig = typeof siteConfig;