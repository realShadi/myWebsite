// "root" is the relative path back to the site root ("", "../", ...), so every
// link works from a sub-folder, from a file:// preview and from any host path.
export default {
  root: (data) => {
    const url = data.page && data.page.url;
    if (!url) return "";
    const depth = url.split("/").length - 2;
    return depth > 0 ? "../".repeat(depth) : "";
  },
};
