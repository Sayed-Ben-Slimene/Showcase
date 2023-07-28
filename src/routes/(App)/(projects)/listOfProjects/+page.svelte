<script lang="ts">
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

				<div class="row g-4 align-items-center">
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
						<div class="dropdown">
						<a href="#" class="btn-action" data-bs-toggle="dropdown" aria-expanded="false">
							<!-- Download SVG icon from http://tabler-icons.io/i/dots-vertical -->
							<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path></svg>
						</a>
						<div class="dropdown-menu dropdown-menu-end">
							<a href="#" class="dropdown-item text-danger">Delete</a>
						</div>
						</div>
					</div>
					
				</div>

			{/each}
			
         	 {/if}
		</div>
	</div>
</div>   