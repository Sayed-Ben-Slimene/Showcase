import { error, redirect } from '@sveltejs/kit';

/**
 * @typedef {import('pocketbase')}
 */


export const load = async ({ locals }) => {
  try {
    // Fetch all user data from the server
    // const users = await fetch("/http://127.0.0.1:8090/users").then((res) => res.json());


    const users = await locals.pb.collection("users").getList(1,20,{sort: "-created"})

    console.log("users", users); // Log the actual data received

  //   const users = await pb.collection('users').getFullList({
  //     sort: '-created',
  // });
  


    return {
      users: structuredClone(users.items),
    };
  } catch (error) {
    console.error("Error: ", error);
    // Handle the error appropriately, for example, redirect to an error page.
    throw error;
  }
};




export const actions = {
  create: async ({ request, locals }) => {
    try {
      const data = await request.formData();
      console.log("data", data); // Log the actual data received

      // Verify if the 'user' property exists in 'locals'
      if (!locals.user || !locals.user.id) {
        throw new Error("User data not available or missing user ID.");
      }

      const thumb = data.get('thumbnail');

      if (thumb.size === 0) {
        data.delete('thumbnail');
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
