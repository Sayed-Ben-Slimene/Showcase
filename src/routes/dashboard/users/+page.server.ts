import { redirect, fail } from "@sveltejs/kit"



/**
 * @typedef {import('pocketbase')}
 */
export const load = async ({ locals }) => {

  // if (!locals.user) {
  //   throw redirect(303, "/login")
  // }
  
  const users = await locals.pb.collection("users").getList(1,20,{sort: "-created"})
  console.log("users",users)


  return {
    users: structuredClone(users.items),
  }
}
