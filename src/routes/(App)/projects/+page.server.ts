import { error, redirect } from '@sveltejs/kit';

export const actions = {
  create: async ({ request, locals }) => {
    try {
      const data = await request.formData();
      
      console.log("data");
      console.log(data); // Log the actual data received

      data.append('user', locals.user.id);

      await locals.pb.collection("Projects").create(data);
      

      throw redirect(303, "/"); // Redirect after successful creation
    } catch (e) {
      console.error(e);
      const fail = { error: "An error occurred" };
      return error(fail);
    }
  },
};
