"use strict";

/**
 * blog controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::blog.blog", ({ strapi }) => ({
  async sitemap(ctx) {
    ctx.query = {
      fields: ["title", "slug", "updatedAt"],
      pagination: ctx.query.pagination,
    };

    return await super.find(ctx);
  },
}));
