<script lang="ts">
	    import { enhance } from "$app/forms"

     import { getImageURL } from '$lib/utils';
	export let data

</script>
<div class="w-full mt-4 flex flex-col items-center">

	<div class="card">
		<div class="card-body">

		{#if data.projects.length === 0}
				<h1 class="text-center text-10x10">☹️</h1>
				<h2 class="text-center text-3xl">Looks like you don't have any projects.</h2>
				<a href="/projects/new" class="btn btn-primary max-w-md mt-10">Add One</a>
		{:else}


	     	{#each data.projects as projects}
			<div style="padding: 10px;"></div>

				<div class="row g-8 align-items-center">
					<div class="col-auto">
						<!-- <span class="avatar avatar-lg" style="background-image: url(./static/avatars/000m.jpg)"></span> -->
					
						<div class="avatar avatar-lg">
							<div class="w-10 rounded">
								<img
								src={projects?.thumbnail
									? getImageURL(projects.collectionId, projects.id, projects.thumbnail, '80x80')
									: `https://via.placeholder.com/80/4506CB/FFFFFF/?text=${projects.name}`}
								alt="User thumbnail"
								/>
							</div>
						</div>

					</div>
					<div class="col">
						<h4 class="card-title m-0">
						<a href="#">{projects.name}</a>
						</h4>
						<div class="text-muted">
							{projects.tagline}
						</div>
						<div class="small mt-1">
						<span class="badge bg-green"></span> {projects.url}
						</div>
					</div>
					<div class="col-auto">
						<a href="#" class="btn">
							{projects.url}
						</a>
					</div>

					<div class="col-auto">
	
						<div class="btn-list flex-nowrap">
							<form method="POST" action="?/delete" use:enhance>

                                   	<a href="/{projects.id}"> <button type="button" class="btn btn-lime w-100">Update</button></a>
                                        <input type="hidden" name="id" hidden value={projects.id}/>

								<button class="btn btn-red w-100">Delete</button>
							</form>

						</div>

					</div>
					
				</div>

			{/each}
			
         	 {/if}
		</div>
	</div>
</div>   