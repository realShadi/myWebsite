import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";

const byDateDesc = (a, b) => b.date - a.date;

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  eleventyConfig.addFilter("readableDate", (date) =>
    new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(date)
  );
  eleventyConfig.addFilter("isoDate", (date) => date.toISOString().slice(0, 10));
  eleventyConfig.addFilter("readingTime", (html) => {
    const words = String(html).replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
    return `${Math.max(1, Math.round(words / 220))} min read`;
  });
  eleventyConfig.addFilter("limit", (list, count) => list.slice(0, count));
  // Turns a page URL into a file path relative to the site root: "/blog/" -> "blog/index.html".
  eleventyConfig.addFilter("path", (url) => (url.endsWith("/") ? `${url}index.html` : url).replace(/^\//, ""));

  eleventyConfig.addCollection("posts", (api) => api.getFilteredByGlob("src/blog/posts/*.md").sort(byDateDesc));
  eleventyConfig.addCollection("notes", (api) => api.getFilteredByGlob("src/notes/items/*.md").sort(byDateDesc));
  eleventyConfig.addCollection("projects", (api) =>
    api.getFilteredByGlob("src/projects/items/*.md").sort((a, b) => a.data.order - b.data.order)
  );

  return {
    dir: { input: "src", output: "_site", includes: "_includes", data: "_data" },
    // Markdown files are plain Markdown, so code samples can contain {{ braces }} safely.
    markdownTemplateEngine: false,
    htmlTemplateEngine: "njk",
  };
}
