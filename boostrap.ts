// ./src/index.ts

import { Strapi } from "@strapi/strapi";

interface AdminRole {
    id: string;
    code: string;
    // Add other fields you need from the "admin::role" table
}

interface AdminUser {
    id: string;
    firstname: string;
    lastname: string;
    username: string;
    email: string;
    password: string;
    isActive: boolean;
    blocked: boolean;
    roles: string[]; // or AdminRole[] if you want to store objects
    // Add other fields you need from the "admin::user" table
}

export default {
    // Called before bootstrap (optional)
    async register({ strapi }: { strapi: Strapi }) {
        // If you need to run logic prior to bootstrap, do it here
    },

    // Called after register, on Strapi startup
    async bootstrap({ strapi }: { strapi: Strapi }) {
        console.log("Running bootstrap to ensure an admin user exists...");

        // 1) Find the Super Admin role
        const superAdminRole = (await strapi.db
            .query<AdminRole>("admin::role")
            .findOne({
                where: { code: "strapi-super-admin" },
            })) as AdminRole | null;

        if (!superAdminRole) {
            console.log(
                "Super Admin role not found. Ensure your database is properly seeded."
            );
            return;
        }

        // 2) Check if any user is already assigned to the Super Admin role
        const existingSuperAdmin = (await strapi.db
            .query<AdminUser>("admin::user")
            .findOne({
                where: { roles: { id: superAdminRole.id } },
            })) as AdminUser | null;

        if (!existingSuperAdmin) {
            console.log("No Super Admin found. Creating one...");

            // 3) Create a new Super Admin user
            await strapi.db.query<AdminUser>("admin::user").create({
                data: {
                    firstname: "Your",
                    lastname: "Name",
                    username: "your_admin",         // login username
                    email: "your.email@domain.com", // must be a valid email format
                    password: "MySecurePassword1",  // choose a strong password
                    isActive: true,
                    blocked: false,
                    roles: [superAdminRole.id],     // link to the Super Admin role
                },
            });

            console.log("Super Admin user created successfully!");
        } else {
            console.log("A Super Admin user already exists. Skipping creation.");
        }
    },
};