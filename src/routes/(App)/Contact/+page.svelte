<script>
  export let form
	// import '../../app.css';

</script>


  <div class="page page-center">
    
    <div class="container container-tight py-4">

      <div class="card card-md">
        <div class="card-body">
          <h2 class="h2 text-center mb-4">Contact </h2>
    
            <form method="POST" action="?/sendMail" class="mt-6">

              <div class="mb-3">
                <label class="form-label">Email</label>
                <div class="input-icon">
                  <span class="input-icon-addon">
                    <i class="ti ti-brand-gmail"></i>
                  </span>
                        <input type="text" class="form-control form-control-rounded mb-2" name="email" placeholder="Enter your email..."/>
              </div>

              <div class="mb-3">
                
                <label class="form-label">Message description</label>
                <!-- <textarea rows="5" class="form-control" placeholder="Here can be your description">  </textarea> -->
                <textarea class="form-control" id="message" name ="message" data-bs-toggle="autosize" placeholder="Type something…"></textarea>
  
              </div>
            


            
            <div class="form-footer">
          <button type="submit" class="btn btn-primary w-100">Send Email</button> 
          
            </div>
          </form>
        </div>

      </div>

      
    </div>
  </div>
  <!-- Libs JS -->
  <!-- Tabler Core -->
