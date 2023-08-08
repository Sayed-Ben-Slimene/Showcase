<script lang="ts">
	    import { enhance } from "$app/forms"

     import { getImageURL } from '$lib/utils';
	export let data

	//export let projects;
     // export let user;

</script>
<div class="w-full mt-4 flex flex-col items-center">

	<div class="card">
		<div class="card-body">

	     	<!-- {#each projects as projects} -->

			{#each data.projects as project}

			<div style="padding: 10px;"></div>

				<div class="row g-8 align-items-center">
					<div class="col-auto">
						<!-- <span class="avatar avatar-lg" style="background-image: url(./static/avatars/000m.jpg)"></span> -->
					
						<div class="avatar avatar-lg">
							<div class="w-10 rounded">
								<img
								src={project?.thumbnail
									? getImageURL(project.collectionId, project.id, project.thumbnail, '80x80')
									: `https://via.placeholder.com/80/4506CB/FFFFFF/?text=${project.name}`}
								alt="User thumbnail"
								/>
							</div>
						</div>

					</div>
					<div class="col">
						<h4 class="card-title m-0">

						<!-- <a href="#">{project.user.email}</a> -->
						{#if project.user}
						<p>Project Owner: {project.user.name}</p>
						<p>Email: {project.user.email}</p>
					   {/if}

					</h4>
						<div class="text-muted">
							{project.tagline}
						</div>
						<div class="small mt-1">
						<span class="badge bg-green"></span> {project.url}
						</div>
					</div>
					<div class="col-auto">
						<a href="#" class="btn">
							{project.url}
						</a>
					</div>


					
				</div>

			{/each}

		</div>
	</div>
</div>   