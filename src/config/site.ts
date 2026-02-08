import { z } from "zod";

const siteSchema = z.object({
    url: z.string().url(),
    title: z.string(),
    description: z.string(),
    locale: z.string().default("en-GB"),
});

export const siteConfig = siteSchema.parse({
    url: "https://example.com",
    title: "Astro Mistaro",
    description: "Long-lived, content-driven websites built with Astro.",
    locale: "en-GB",
});

export type SiteConfig = z.infer<typeof siteSchema>;