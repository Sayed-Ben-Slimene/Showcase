import { error, redirect } from '@sveltejs/kit';
import { serializeNonPOJOs } from '$lib/utils';


export const load = async ({ locals, params }) => {

    if(!locals.pb.authStore.isValid){
        throw error(401, 'Unauthorized');
    }

    try{
        const projects = serializeNonPOJOs(await locals.pb.collection('projects').getOne(params.id));

    
        return {
            projects
          }
} catch(err){
    console.log('Error:', err);
    throw error
}
}



export const actions = {
   update: async ({ request, locals, params }) => {
        const data = await request.formData();
        console.log(params.id);
        console.log(data);
        try{
// Verify if the 'user' property exists in 'locals'
if (!locals.user || !locals.user.id) {
    throw new Error("User data not available or missing user ID.");
  }

  data.append('user', locals.user.id);

        await locals.pb.collection('projects').update(params.id, data);
        }catch (err){
            console.log('Error:', err);
            throw error
        }
        
        throw redirect(303, "/listOfProjects")
    }
}