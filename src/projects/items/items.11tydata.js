export default {
  layout: "layouts/project.njk",
  eleventyComputed: {
    permalink: (data) => `projects/${data.page.fileSlug}.html`,
  },
};
