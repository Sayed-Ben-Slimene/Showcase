    <script lang="ts">

    export let data
   
    </script>
    
    
    <h1 class="text-center">liste of users</h1>
    
            <div class="table-container mt-12">
                <!-- Native Table Element -->
                
                <table class="table table-hover table-compact">
                    <thead>
                        <tr class="text-center">
                            <th>#</th>
                            <th>email</th>
                            <th>nom</th>
                            <th>nom</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- {#each tableArr as row, i} -->
                        {#each data.users as users, i}
                            <tr>
                                <td>{i+1}</td>
                                <td>{users.email}</td>
                                <td>{users.username}</td>
                                <td>{users.name}</td>
                               
                            </tr>
                            {/each}
                        <!-- {/each} -->
                    </tbody>
                    
                </table>
            </div>
    
    
    
    