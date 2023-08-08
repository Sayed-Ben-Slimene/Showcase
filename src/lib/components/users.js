// api/users.ts
// export async function getUsers(): Promise<any[]> {
//      // Your implementation to fetch the list of users from the PocketBase API.
//      // Make sure to replace 'your-pocketbase-url' and 'your-pocketbase-table-id' with the appropriate values.
//      const response = await fetch('http://localhost:5173/components/tables/projects/records');
//      if (!response.ok) {
//        throw new Error('Failed to fetch users.');
//      }
//      return response.json();
//    }
   

   // src/api.js
// A mock API endpoint to simulate fetching users' data
export async function fetchUsers() {
  const response = await fetch('http://localhost:5173/users');
  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }
  return response.json();
}