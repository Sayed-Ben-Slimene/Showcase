<script>
    export let form
</script>
<div class="page page-center">
    
    <div class="container container-tight py-2">
        
      <div class="text-center mb-4">
        
        <a href="." class="navbar-brand navbar-brand-autodark">
            <img src="./src/image/logo-no-background.svg" width="300" height="50" alt="Showcase"  />
          </a>     
      </div>
      <form class="card card-lg" action="?/resetPassword" method="POST">
        <div class="card-body">
          <h2 class="card-title text-center mb-4">Forgot password</h2>
          <p class="text-muted mb-4">Enter your email address and your password will be reset and emailed to you.</p>
          <div class="mb-3">
            <label class="form-label">Email address</label>
            <input type="email" name="email" class="form-control" placeholder="Enter email">
          </div>

          <div class="form-footer">
            <button type="submit" class="btn btn-primary btn-md w-100">Reset my password</button>
          </div>
          {#if form?.success}
          <div class="alert alert-success" role="alert">
            <h4 class="alert-title">Wow! Everything worked!</h4>
            <div class="text-muted">Your account has been saved!</div>
          </div>
          {/if}

        </div>
      </form>
      <div class="text-center text-muted mt-3">
        Forget it, <a href="\login">send me back</a> to the sign in screen.
      </div>
    </div>
  </div>
