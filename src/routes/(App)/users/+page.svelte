    <script lang="ts">

    export let data
   	import { getImageURL } from '$lib/utils';

    </script>
    
    
    <h1 class="text-center">liste of users</h1>
    
            <div class="table-container mt-12">
                <!-- Native Table Element -->
                
                <table class="table table-hover table-compact">
                    <thead>
                        <tr class="text-center">
                            <th>#</th>
                            <th>Avatar</th>
                            <th>email</th>
                            <th>ID</th>
                            <th>nom</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- {#each tableArr as row, i} -->
                        {#each data.users as users, i}
                            <tr>
                                <td>{i+1}</td>


                                <td>	<div class="avatar">
                                  <div class="w-20 rounded">
                                    <img
                                      src={users?.avatar
                                        ? getImageURL(users.collectionId, users.id, users.avatar, '80x80')
                                        : `https://via.placeholder.com/80/4506CB/FFFFFF/?text=${users.name}`}
                                      alt="User Avatar"
                                    />
                                  </div>
                                </div></td>

                                <td data-label="Name" >
                                    <div class="d-flex py-1 align-items-center">



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
                             
                                      <a href="#" class="btn btn-outline-dark w-100">
                                        Edit
                                      </a>
                                      <a href="#" class="btn btn-outline-danger w-100">
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
    
    
