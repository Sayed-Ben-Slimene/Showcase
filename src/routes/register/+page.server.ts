import { redirect, fail } from '@sveltejs/kit';


export const actions = {
    register: async ({ locals, request }) => {
        
       const data = Object.fromEntries(await request.formData()) as {
        email:string;
        password:string;
    };
        console.log("data");
        console.log(data);
        
        try {
            // console.log(data.name);
            await locals.pb.collection("users").create(data)
            await locals.pb.collection("users").requestVerification(data.email)
        } catch (e) {
            console.log(e)
            return fail
          }
          throw redirect(303, "/login")
        },
    }