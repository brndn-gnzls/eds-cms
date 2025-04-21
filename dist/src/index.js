"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    async bootstrap({ strapi }) {
        console.log("Listing all admin users...");
        const allAdmins = await strapi.db.query("admin::user").findMany({
            // Optionally populate roles, e.g.:
            populate: ["roles"],
        });
        console.log("Admin users found:", allAdmins);
    },
};
