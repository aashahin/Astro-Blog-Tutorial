import rss, {pagesGlobalToRssItems} from "@astrojs/rss";

export async function GET(context){
    return rss({
        title: 'Astro Blog - Tutorial',
        description: 'My journey learning Astro',
        site: context.site,
        items: await pagesGlobalToRssItems(import.meta.glob('./**/*.md/')),
        customData: `<language>en-us</language>`,
    })
}