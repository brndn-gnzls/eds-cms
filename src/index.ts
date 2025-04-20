export default {
  async bootstrap({ strapi }) {
    console.log("Removing existing admin user(s)...");

    const userEmail = "wes.gonzales@elevancehealth.com";

    const existingUser = await strapi.db.query("admin::user").findOne({
      where: { email: userEmail },
    });

    if (existingUser) {
      await strapi.db.query("admin::user").delete({
        where: { id: existingUser.id },
      });
      console.log(`Deleted admin user with email '${userEmail}'.`);
    } else {
      console.log(`No admin user found with email '${userEmail}'.`);
    }
  },
};