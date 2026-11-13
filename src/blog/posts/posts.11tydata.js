export default {
  layout: "layouts/post.njk",
  eleventyComputed: {
    permalink: (data) => `blog/${data.page.fileSlug}.html`,
  },
};
