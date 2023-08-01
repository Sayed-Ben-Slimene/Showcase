<script>
  export let form
	/** @type {import('./$types.js').LayoutData} */


</script>


<style>

.input {
 color: #000000;
 border: 2px solid rgba(0, 0, 0, 0.417);
 border-radius: 10px;
 background: transparent;


}

.input:active {
 box-shadow: 2px 2px 15px #4169e1 inset;
}


</style>
 
      <div class="container container-tight py-4">

        
        <div class="card card-md">
          <div class="card-body">
            <div class="ribbon bg-red">NEW</div>

            <h1 class="h1 text-center mb-4">Tell us more about this project </h1>
            <p class="h4 text-center mb-4">We'll need the name, tagline, link, and description</p>


              <form method="POST" action="?/create" class="mt-6">

              <div class="mb-1">
                <label class="form-label">Project name</label>

                <div class="input-icon">
                  <span class="input-icon-addon">
                    <i class="ti ti-circle-filled"></i>
                  </span>
                        <input type="Text" id="name" name="name" class="input form-control form-control mb-2" placeholder="Enter your Project name..."/>
                </div>
              </div>
              <div class="mb-1">
                <label class="form-label">Project tagline</label>
                <div class="input-icon">
                    <span class="input-icon-addon">
                      <i class="ti ti-circle-filled"></i>
                    </span>
                  <input type="Text" id="tagline" name="tagline" class="input form-control form-control mb-2"   placeholder="Enter your Project tagline..."/>
                </div>
              </div>


              <div class="mb-1">
                <label class="form-label">Project URL</label>
                <div class="input-icon">
                  <span class="input-icon-addon">
                    <i class="ti ti-brand-gmail"></i>
                  </span>
                        <input type="text" id="url" name ="url" class="input form-control form-control-rounded mb-2" placeholder="Enter your email..."/>
                </div>
  
              </div>



              <div class="mb-3">
                <label class="form-label">Project description</label>
                <!-- <textarea rows="5" class="form-control" placeholder="Here can be your description">  </textarea> -->
                <textarea class="input form-control" id="description" name ="description" data-bs-toggle="autosize" placeholder="Type something…"></textarea>
  
              </div>

              <div class="mb-3">
                <div class="form-label">Thumbnail</div>
                <input type="file"id="thumbnail" name ="thumbnail" class="input form-control" />
              </div>



              <div class="form-footer">
                <button type="submit" class="btn btn-indigo btn-md w-100">Create Project</button>
              </div>
            </form>
          </div>  
        </div>

      </div>
  
    <!-- Libs JS -->
    <!-- Tabler Core -->
  