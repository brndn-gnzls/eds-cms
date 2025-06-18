// // ./src/index.ts
// import {Strapi} from "@strapi/types/dist/core";
//
// export default {
//   async bootstrap({ strapi }: { strapi: Strapi }) {
//     console.log("Removing all Super Admin users...");
//
//     // 1) Find the Super Admin role
//     const superAdminRole = await strapi.db.query("admin::role").findOne({
//       where: { code: "strapi-super-admin" },
//     });
//
//     // If no super admin role exists for some reason, just return
//     if (!superAdminRole) {
//       console.log("No Super Admin role found. Nothing to delete.");
//       return;
//     }
//
//     // 2) Delete all users who have the super admin role
//     await strapi.db.query("admin::user").delete({
//       where: {
//         roles: {
//           id: superAdminRole.id,
//         },
//       },
//     });
//
//     console.log("Deleted all users with the Super Admin role.");
//   },
// };