<script>
    export let form
  </script>
    <div class="page page-center">
      <div class="container container-tight py-4">
        <div class="text-center mb-3">
          <a href="." class="navbar-brand navbar-brand-autodark">
            <img src="./src/image/logo-no-background.svg" width="300" height="50" alt="Showcase"  />
          </a>
        </div>
        <div class="card card-md">
          <div class="card-body">
            <h1 class="h2 text-center mb-4">Create new account </h1>
      
              <form method="POST" action="?/register" class="mt-6">
  
                <div class="mb-1">
                    <label class="form-label">Name</label>
                    <div class="input-icon">
                      <span class="input-icon-addon">
                        <i class="ti ti-user"></i>
                      </span>
                            <input type="text" class="form-control form-control-rounded mb-2" name="name" placeholder="Enter your Name..."/>
                    </div>

              <div class="mb-1">
                <label class="form-label">Email</label>
                <div class="input-icon">
                  <span class="input-icon-addon">
                    <i class="ti ti-brand-gmail"></i>
                  </span>
                        <input type="email" name="email" class="form-control form-control-rounded mb-2" placeholder="Enter your email..."/>
                </div>
  
              </div>
              <div class="mb-1">
                <label class="form-label">Password</label>
  
                <div class="input-icon">
                    <span class="input-icon-addon">
                      <i class="ti ti-circle-key"></i>
                    </span>
                  <input type="password" class="form-control form-control-rounded mb-2" name="password"  placeholder="Enter your Password..."/>
                </div>
              </div>
              <div class="mb-1">
                <label class="form-label">Confirm Password</label>
  
                <div class="input-icon">
                    <span class="input-icon-addon">
                      <i class="ti ti-circle-key"></i>
                    </span>
                  <input type="password" class="form-control form-control-rounded mb-2" name="passwordConfirm"  placeholder="Confirm your Password..."/>
                </div>
              </div>
              <div class="mb-1">
                <label class="form-check">
                  <input type="checkbox" class="form-check-input"/>
                  <span class="form-check-label">Agree the <a href="./terms-of-service.html" tabindex="-1">terms and policy</a>.</span>
                </label>
              </div>

              <div class="form-footer">
                <button type="submit" class="btn btn-primary btn-md w-100">Create new account</button>
              </div>
            </form>
          </div>  
        </div>
        <div class="text-center text-muted mt-3">
            Already have account? <a href="/login" tabindex="-1">Sign in</a>
  
        </div>
        
      </div>
    </div>
    <!-- Libs JS -->
    <!-- Tabler Core -->
  