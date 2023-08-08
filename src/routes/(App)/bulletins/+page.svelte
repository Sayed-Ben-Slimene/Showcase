<script lang="ts">
    import type { PageData } from './$types';
    import { getPDFURL } from '$lib/utils';

    export let data;
</script>
<style>


        .pdf-container {
            width: 500px; /* Set desired width */
            height: 500px; /* Set desired height */
            overflow: hidden; /* Hide overflow */
            
        }

        .pdf-frame {
            width: 100%;
            height: 100%;
            border: none; /* Remove border */
        }
</style>

<div class="w-full mt-4 flex flex-col items-center">

	<div class="card">
		<div class="card-body">


            <div class="row g-8 align-items-center">
                {#each data.bulletins as bulletins}

                <div class="col-auto">
                        <h1 style="color: green">{bulletins.title}</h1>
                        <h3>{bulletins.type}</h3>

                        <div class="pdf-container">

                            <!-- svelte-ignore a11y-missing-attribute -->
                            <iframe 
                                class="pdf-frame" 
                                frameborder="0"
                                src={bulletins?.file
									? getPDFURL(bulletins.collectionId, bulletins.id, bulletins.file)
									: `https://via.placeholder.com/80/4506CB/FFFFFF/?text=${bulletins.title}`}>
                            </iframe>
                        
                        </div>
                  

                </div>
                  {/each}
            </div>

        </div>
    </div>

</div>