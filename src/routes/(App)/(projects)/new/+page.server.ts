import { error, redirect } from '@sveltejs/kit';

export const actions = {
  create: async ({ request, locals }) => {
    try {
      const data = await request.formData();
      console.log("data", data); // Log the actual data received

      // Verify if the 'user' property exists in 'locals'
      if (!locals.user || !locals.user.id) {
        throw new Error("User data not available or missing user ID.");
      }

      data.append('user', locals.user.id);

      // Assuming you have the 'pb' instance correctly set up in 'locals'
      await locals.pb.collection("projects").create(data);

    } catch (e) {
      console.error("Error creating project:", e);
      const fail = { error: "An error occurred while creating the project." };
      return error(fail);
    }
    throw redirect(303, "/")

  },
};
