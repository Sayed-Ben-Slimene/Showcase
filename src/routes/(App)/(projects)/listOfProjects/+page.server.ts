import { redirect, fail } from "@sveltejs/kit"
import { serializeNonPOJOs } from '$lib/utils';
import { error } from '@sveltejs/kit';



/**
 * @typedef {import('pocketbase')}
 */
// 	export const load = ({ locals }) => {
		
// 		if (!locals.user) {
// 			throw redirect(303, "/login")
// 		   }

// 	const getUsersProjects = async  ({ locals })=> {
// 		try {


// 			const projects = serializeNonPOJOs(
// 				await locals.pb.collection('projects').getFullList()
// 			);
// 			return projects;
// 		}
		
		
		
		
// 		catch (err) {
// 			console.log('Error: ', err);
// 			throw error(err.status, err.message);
// 		}
// 	};

// 	return {
// 		projects: getUsersProjects(locals.user.id)
// 	};
// }


// export const load = async ({ locals }) => {
// 	try {
// 	  // Check if the user is authenticated, you can use locals.user to check this.
// 	  if (!locals.user) {
// 	    throw redirect(303, "/login");
// 	  }
   
// 	  // Fetch projects related to the authenticated user.
// 	  const userId = locals.user.id; // Assuming you have a property 'id' in the user object.
// 	  const projects = await locals.pb.collection("projects").getList(1, 20, {
// 	    sort: "-created",
// 	    filter: `user = "${userId}" `, // Assuming 'user' is the property that holds the reference/identifier to the user in the projects collection.
// 	  });
   
// 	  // Fetch user data for the authenticated user.
// 	  const user = await locals.pb.collection("users").getOne(userId); // Assuming you have a function to fetch a single user based on their id.
   
// 	  // Fetch user data for each project and combine it with the project data.
// 	  const projectsWithUserData = await Promise.all(
// 	    projects.items.map(async (project) => {
// 		 const projectUserId = project.user; // Assuming 'user' is the property that holds the reference/identifier to the user in the project object.
   
// 		 // Fetch user data for the project's user.
// 		 const projectUser = await locals.pb.collection("users").getOne(projectUserId);
   
// 		 // Combine project data with user data.
// 		 return {
// 		   ...project,
// 		   user: projectUser,
// 		 };
// 	    })
// 	  );
   
// 	  console.log("projectsWithUserData", projectsWithUserData);
   
// 	  return {
// 	    projects: structuredClone(projectsWithUserData),
// 	    user: structuredClone(user),
// 	  };
// 	} catch (error) {
// 	  console.error("Error: ", error);
// 	  // Handle the error appropriately, for example, redirect to an error page.
// 	  throw error;
// 	}
//    };
   

export const load = async ({ locals }) => {
	try {
	  // Fetch all projects ordered by creation date.
	  const projects = await locals.pb.collection("projects").getList(1, 20, {
	    sort: "-created",
	  });
   
	  // Create an array to store unique user IDs from all projects.
	  const userIds = Array.from(new Set(projects.items.map((project) => project.user)));
   
	  // Fetch user data for all the unique user IDs and store them in a map for easy access.
	  const usersMap = new Map();
	  await Promise.all(
	    userIds.map(async (userId) => {
		 const user = await locals.pb.collection("users").getOne(userId);
		 usersMap.set(userId, user);
	    })
	  );
   
	  // Map user data to their respective projects.
	  const projectsWithUserData = projects.items.map((project) => {
	    const projectUser = usersMap.get(project.user) || null;
   
	    return {
		 ...project,
		 user: projectUser,
	    };
	  });
   
	  console.log("projectsWithUserData", projectsWithUserData);
   
	  return {
	    projects: structuredClone(projectsWithUserData),
	  };
	} catch (error) {
	  console.error("Error: ", error);
	  // Handle the error appropriately, for example, redirect to an error page.
	  throw error;
	}
   };