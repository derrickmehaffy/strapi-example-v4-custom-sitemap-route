module.exports = {
  routes: [
    {
      method: "GET",
      path: "/blogs/custom/sitemap",
      handler: "api::blog.blog.sitemap",
    },
  ],
};
