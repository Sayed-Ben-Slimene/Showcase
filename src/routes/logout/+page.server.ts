import { redirect } from "@sveltejs/kit"


export const POST: import('./$types').PageData = ({ locals:any }) => {
  locals.pb.authStore.clear()
  locals.user = null
  throw redirect(303, "/login")
}