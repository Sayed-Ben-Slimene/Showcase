import { redirect, fail } from "@sveltejs/kit"

export const actions = {
  
  login: async ({ locals, request }) => {
    const data = Object.fromEntries(await request.formData()) as {
        email:string;
        password:string;
    };

    try {
      const user = await locals.pb
        .collection("users")
        .authWithPassword(data.email, data.password)

      if (!user.record.verified) {
        locals.pb.authStore.clear()
        return fail(400, { error: "Please verify your email before login" })
      }
    } catch (e) {
      console.log(e)
      return fail
    }
    throw redirect(303, "/")
  }

}