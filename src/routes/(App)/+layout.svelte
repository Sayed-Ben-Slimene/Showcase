<script>
	export let data;
	// import '../../app.css';
	import { getImageURL } from '$lib/utils';


</script>

<div class="page">
	
     <!-- Navbar -->
	<header class="navbar navbar-expand-sm navbar-dark" >
		<div class="container-xl">
		  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-menu" aria-controls="navbar-menu" aria-expanded="false" aria-label="Toggle navigation">
		    <span class="navbar-toggler-icon"></span>
		  </button>
		  <h1 class="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
		    <a href=".">
			 <img src="./src/image/logo-no-background.svg" width="110" height="32" alt="Tabler" class="navbar-brand-image">
		    </a>
		  </h1>
		  {#if !data.user}
		  <div class="dropdown dropdown-end">
			  <a href="/login" class="btn btn-primary">Login</a>
			  <a href="/register" class="btn btn-secondary">Register</a>
		  </div>
	       {:else}
		  <div class="navbar-nav flex-row order-md-last">




		    <div class="nav-item dropdown">
			 <a href="#" class="nav-link d-flex lh-1 text-reset p-0" data-bs-toggle="dropdown" aria-label="Open user menu">
			   {#if data.user?.avatar}

			   <div class="avatar avatar-sm">
				<div class="w-20 rounded">
				  <img
				    src={data.user?.avatar
					 ? getImageURL(data.user.collectionId, data.user.id, data.user.avatar, '80x80')
					 : `https://via.placeholder.com/80/4506CB/FFFFFF/?text=${data.user.name}`}
				    alt="User Avatar"
				  />
				</div>
			   </div>


				<!-- <span class="avatar avatar-sm" style="background-image: url({data.user?.avatar})"></span> -->
			   {:else}
				<!-- If the 'avatar' property is not available, you can show a default avatar or a placeholder -->
				<span class="avatar avatar-sm" style="background-color: #ddd;"></span>
			   {/if}		   
			   
			   <div class="d-none d-xl-block ps-2">
				<div>{data.user.name}</div>
				<div class="mt-1 small text-muted">{data.user.email}</div>
			   </div>
			 </a>



			 
			 <div class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
			   <a href="./profile" class="dropdown-item">Profile</a>
			   <a href="./myProjects" class="dropdown-item">My Projects</a>
			   <div class="dropdown-divider"></div>

			   {#if data.user.email =="sayed.benslimene@esprit.tn"}

			   <a href="./dashboard" class="dropdown-item">Dashboard</a>

			   {/if}


				<form action="/logout" method="POST">
					<button type="submit" class="dropdown-item">Logout</button>

				</form>
			 </div>
		    </div>
		  </div>
		  <div class="collapse navbar-collapse" id="navbar-menu">
		    <div class="d-flex flex-column flex-md-row flex-fill align-items-stretch align-items-md-center">
			 
			
			<ul class="navbar-nav">

					<li class="nav-item">
						<a class="nav-link" href="./" >
						<span class="nav-link-icon d-md-none d-lg-inline-block"><!-- Download SVG icon from http://tabler-icons.io/i/home -->
						<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l-2 0l9 -9l9 9l-2 0" /><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" /><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" /></svg>
						</span>
						<span class="nav-link-title">
						Home
						</span>
						</a>
					</li>

									
					<li class="nav-item">
						<a class="nav-link" href="./new" >
						<span class="nav-link-icon d-md-none d-lg-inline-block"><!-- Download SVG icon from http://tabler-icons.io/i/home -->
							<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-code-circle-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
								<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
								<path d="M8.5 13.5l-1.5 -1.5l1.5 -1.5"></path>
								<path d="M15.5 10.5l1.5 1.5l-1.5 1.5"></path>
								<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
								<path d="M13 9.5l-2 5.5"></path>
							  </svg>
						</span>
						<span class="nav-link-title">
						Projects
						</span>
						</a>
					</li>
									

			  

					<li class="nav-item">
						<a class="nav-link" href="./listOfProjects" >
						<span class="nav-link-icon d-md-none d-lg-inline-block"><!-- Download SVG icon from http://tabler-icons.io/i/home -->
							<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-at" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
								<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
								<path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
								<path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28"></path>
							  </svg>						</span>
						<span class="nav-link-title">
						Projects
						</span>
						</a>
					</li>

					<li class="nav-item">
						<a class="nav-link" href="./bulletins" >
						<span class="nav-link-icon d-md-none d-lg-inline-block"><!-- Download SVG icon from http://tabler-icons.io/i/home -->
							<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-clipboard-text" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
								<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
								<path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"></path>
								<path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></path>
								<path d="M9 12h6"></path>
								<path d="M9 16h6"></path>
							  </svg>					</span>
						<span class="nav-link-title">
							Bulletins
						</span>
						</a>
					</li>

					<li class="nav-item">
						<a class="nav-link" href="./Contact" >
						<span class="nav-link-icon d-md-none d-lg-inline-block"><!-- Download SVG icon from http://tabler-icons.io/i/home -->
							<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-at" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
								<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
								<path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
								<path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28"></path>
							  </svg>						</span>
						<span class="nav-link-title">
						Contact
						</span>
						</a>
					</li>
			 </ul>


		    </div>



		  </div>

		  {/if}
		</div>
	</header>


     
	
	   <!-- Page body -->
	   <div class="page-wrapper">
		    <div class="page-body">
				<div class="container-xl">
					<slot/>

				</div>
		    </div>
	
	  
		</div>

</div>
<footer class="footer items-center p-4 bg-dark text-neutral-content ">
	<div class="items-centergrid-flow-col">
	  <svg width="32" height="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" class="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg> 
	  <p>Copyright © 2023 - All right reserved</p>
		<a><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" class="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
		</a> 
		<a><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" class="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
		<a><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" class="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
	</div> 

   </footer>



   