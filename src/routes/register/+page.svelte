<script>
    export let form
  </script>
    <div class="page page-center">
      <div class="container container-tight py-4">
        <div class="card card-md">
          <div class="card-body">
            <h1 class="h2 text-center mb-4">Create new account </h1>
      
              <form method="POST" action="?/login" class="mt-6">
  
                <div class="mb-3">
                    <label class="form-label">Name</label>
                    <div class="input-icon">
                      <span class="input-icon-">
                        <i class="ti ti-brand-gmail"></i>
                      </span>
                            <input type="text" class="form-control form-control-rounded mb-2" name="text" placeholder="Enter your Name..."/>
                    </div>

              <div class="mb-3">
                <label class="form-label">Email</label>
                <div class="input-icon">
                  <span class="input-icon-addon">
                    <i class="ti ti-brand-gmail"></i>
                  </span>
                        <input type="text" class="form-control form-control-rounded mb-2" name="email" placeholder="Enter your email..."/>
                </div>
  
              </div>
              <div class="mb-3">
                <label class="form-label">Password</label>
  
                <div class="input-icon">
                  <span class="input-icon-addon">
                    <i class="ti ti-circle-key"></i>
                  </span>
                <input type="password" class="form-control form-control-rounded mb-2" name="password"  placeholder="Enter your Password..."/>
                
                </div>
              </div>
              <div class="mb-3">
                <label class="form-check">
                  <input type="checkbox" class="form-check-input"/>
                  <span class="form-check-label">Agree the <a href="./terms-of-service.html" tabindex="-1">terms and policy</a>.</span>
                </label>
              </div>

              <div class="form-footer">
                <button type="submit" class="btn btn-primary w-100">Create new account</button>
              </div>
            </form>
          </div>  
        </div>
        <div class="text-center text-muted mt-3">
            Already have account? <a href="./sign-up.html" tabindex="-1">Sign in</a>
  
        </div>
        
      </div>
    </div>
    <!-- Libs JS -->
    <!-- Tabler Core -->
  