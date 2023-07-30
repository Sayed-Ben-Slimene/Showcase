<script>
    import { enhance } from "$app/forms";
    import { getImageURL } from '$lib/utils';

    export let data 
  </script>
  

 
  <div class="container container-tight py-4">

    <div class="card card-md">
      <div class="card-body">
        <div class="ribbon bg-green">Update</div>

        <h1 class="h1 text-center mb-4">Edit your project ! </h1>



          <form method="POST" action="?/update" class="mt-6 ..." use:enhance >

          <div class="mb-1">
            <label class="form-label">Project name</label>

            <div class="input-icon">
              <span class="input-icon-addon">
                <i class="ti ti-circle-filled"></i>
              </span>
                    <input type="Text" value={data.projects.name} id="name" name="name" class="form-control form-control mb-2" placeholder="Enter your Project name..."/>
            </div>
          </div>
          <div class="mb-1">
            <label class="form-label">Project tagline</label>
            <div class="input-icon">
                <span class="input-icon-addon">
                  <i class="ti ti-circle-filled"></i>
                </span>
              <input type="Text" id="tagline" value={data.projects.tagline} name="tagline" class="form-control form-control mb-2"   placeholder="Enter your Project tagline..."/>
            </div>
          </div>


          <div class="mb-1">
            <label class="form-label">Project URL</label>
            <div class="input-icon">
              <span class="input-icon-addon">
                <i class="ti ti-brand-gmail"></i>
              </span>
                    <input type="text" id="url" value={data.projects.url} name="url" class="form-control form-control-rounded mb-2" placeholder="Enter your email..."/>
            </div>

          </div>



          <div class="mb-3">
            <label class="form-label">Project description</label>
            <!-- <textarea rows="5" class="form-control" placeholder="Here can be your description">  </textarea> -->
            <textarea class="form-control" value={data.projects.description} id="description" name ="description" data-bs-toggle="autosize" placeholder="Type something…"></textarea>

          </div>
          <div class="avatar avatar-lg">
            <div class="w-10 rounded">
                <img
                src={data.projects?.thumbnail
                    ? getImageURL(data.projects.collectionId, data.projects.id, data.projects.thumbnail, '100x100')
                    : `https://via.placeholder.com/80/4506CB/FFFFFF/?text=${data.projects.name}`}
                alt="User thumbnail"
                />
            </div>
          </div>

          <div class="mb-3">
            <div class="form-label">Thumbnail</div>
            <input type="file" id="thumbnail" name="thumbnail" class="form-control" />
          </div>



          <div class="form-footer">
            <button type="submit" class="btn btn-indigo btn-md w-100">Update Project</button>
          </div>
        </form>
      </div>  
    </div>

  </div>

