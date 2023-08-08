import { redirect, fail } from "@sveltejs/kit"
import { serializeNonPOJOs } from '$lib/utils';
import { error } from '@sveltejs/kit';



/**
 * @typedef {import('pocketbase')}
 */
	export const load = ({ locals }) => {
		
		if (!locals.user) {
			throw redirect(303, "/login")
		   }

	const getUsersProjects = async (userId) => {
		try {
			const projects = serializeNonPOJOs(
				await locals.pb.collection('projects').getFullList(undefined, {
					filter: `user = "${userId}"`
				})
			);
			return projects;
		} catch (err) {
			console.log('Error: ', err);
			throw error(err.status, err.message);
		}
	};

	return {
		projects: getUsersProjects(locals.user.id)
	};
}


export const actions = {
	delete: async ({ request, locals }) => {
	    
	    const data = Object.fromEntries(await request.formData()) as {
		   id:string;
	    };
	    const id = data.id
	    console.log(id);
	    
	    await locals.pb.collection('projects').delete(id);
	    
 
	   
	}
	
 }