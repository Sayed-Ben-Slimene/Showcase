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
                                <td data-label="Name" >
                                    <div class="d-flex py-1 align-items-center">
                                      <span class="avatar me-2" style="background-image: url({users.avatar})"></span>
                                      <div class="flex-fill">
                                        <div class="font-weight-medium">{users.name}</div>
                                        <div class="text-muted"><a href="#" class="text-reset">{users.email}</a></div>
                                      </div>
                                    </div>
                                  </td>                               
                             <td>{users.username}</td>
                                <td>{users.name}</td>
                                <td>
                                    <div class="btn-list flex-nowrap">
                                      <a href="#" class="btn">
                                        Edit
                                      </a>
                                      <a href="#" class="btn">
                                        Delete
                                      </a>
        
                                    </div>
                                  </td>   
                            </tr>
                            {/each}
                        <!-- {/each} -->
                    </tbody>
                    
                </table>
            </div>
    
    
