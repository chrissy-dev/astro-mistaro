import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { siteConfig } from "@config/site";

export async function GET() {
    const posts = (await getCollection("posts"))
        .filter((post) => !post.data.draft)
        .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

    return rss({
        title: siteConfig.title,
        description: siteConfig.description,
        site: siteConfig.url,

        items: posts.map((post) => ({
            title: post.data.title,
            description: post.data.description,
            pubDate: post.data.date,
            link: `/posts/${post.slug}/`,
        })),
    });
}