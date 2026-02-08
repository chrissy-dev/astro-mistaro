// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { siteConfig } from "./src/config/site";
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    site: siteConfig.url,
    vite: {
        plugins: [tailwindcss()]
    },
    integrations: [
        mdx(),
        sitemap(),
    ],
});