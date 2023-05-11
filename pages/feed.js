/**
 * This is a dynamic RSS feed rendered on the server with all blog posts
 * We use SSG with a cache of a few minutes instead of statically generating the file because we want
 * new blog posts and edits to automatically show up here
 */

import { metaTagsFragment, responsiveImageFragment } from "@/lib/fragments";
import { Client } from '@datocms/cma-client';
import RSS from "rss";

export const getServerSideProps = async (ctx) => {
  const client = new Client({ apiToken: process.env.NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN });

  // const graphqlRequest = {
  //   query: `
  //     {
  //       site: _site {
  //         favicon: faviconMetaTags {
  //           ...metaTagsFragment
  //         }
  //       }
  //       blog {
  //         seo: _seoMetaTags {
  //           ...metaTagsFragment
  //         }
  //       }
  //       allPosts(orderBy: date_DESC) {
  //         title
  //         slug
  //         excerpt
  //         date
  //         coverImage {
  //           responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
  //             ...responsiveImageFragment
  //           }
  //         }
  //         author {
  //           name
  //           picture {
  //             responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 100, h: 100, sat: -100}) {
  //               ...responsiveImageFragment
  //             }
  //           }
  //         }
  //       }
  //     }

  //     ${metaTagsFragment}
  //     ${responsiveImageFragment}
  //   `
  // };

  const allPosts = await client.items.list({
    filter: {
      type: 'post',
    },
  })

  const feed = new RSS({
    title: `Blog - Felipe Luis`,
    description: `Hey there, my name is Felipe Luis and I am a frontend developer with a strong passion for technology and design.`,
    language: "en",
    copyright: `©${new Date().getFullYear()} Felipe Luis`,
    site_url: "https://blog.felipeluis.com.br/",
    feed_url: "https://blog.felipeluis.com.br/feed/",
  });

  allPosts.forEach((blogPost) => {
    feed.item({
      guid: blogPost.id,
      title: blogPost.title,
      description: blogPost.excerpt,
      url: `https://blog.felipeluis.com.br/${blogPost.slug}`,
      date: new Date(blogPost.date),
      // categories: blogPost.tags.map((tag) => tag),
      // enclosure: {
      //   url: blogPost.imageSrc,
      // },
    });
  });

  const cacheMaxAgeUntilStaleSeconds = 60 * 60; // 1 minute
  const cacheMaxAgeStaleDataReturnSeconds = 60 * 60 * 60; // 60 minutes
  ctx.res.setHeader(
    "Cache-Control",
    `public, s-maxage=${cacheMaxAgeUntilStaleSeconds}, stale-while-revalidate=${cacheMaxAgeStaleDataReturnSeconds}`
  );

  ctx.res.setHeader("Content-Type", "text/xml");
  ctx.res.write(feed.xml());
  ctx.res.end();

  return { props: {} };
};

// Default export to prevent next.js errors
export default function RssPage() { }