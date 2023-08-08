import { redirect, fail } from "@sveltejs/kit"



/**
 * @typedef {import('pocketbase')}
 */
export const load = async ({ locals }) => {

  // if (!locals.user) {
  //   throw redirect(303, "/login")
  // }
  
  const bulletins = await locals.pb.collection("bulletins").getList(1,20,{sort: "-created"})
  console.log("bulletins",bulletins)


  return {
    bulletins: structuredClone(bulletins.items),
  }
}
