// ./src/index.ts
import {Strapi} from "@strapi/types/dist/core";

export default {
  async bootstrap({ strapi }: { strapi: Strapi }) {
    console.log("Listing all admin users...");

    const allAdmins = await strapi.db.query("admin::user").findMany({
      // Optionally populate roles, e.g.:
      populate: ["roles"],
    });

    console.log("Admin users found:", allAdmins);
  },
};