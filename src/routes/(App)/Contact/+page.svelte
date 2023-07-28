<script>
  export let form
	// import '../../../app.css';

</script>

<style>

button {
              font-family: inherit;
              font-size: 15px;
              background: royalblue;
              color: white;
              padding: 0.7em 1em;
              padding-left: 0.9em;
              display: flex;
              align-items: center;
              border: none;
              border-radius: 16px;
              overflow: hidden;
              transition: all 0.2s;
            }
            
            button span {
              display: block;
              margin-left: 0.3em;
              transition: all 0.3s ease-in-out;
            }
            
            button svg {
              display: block;
              transform-origin: center center;
              transition: transform 0.3s ease-in-out;
            }
            
            button:hover .svg-wrapper {
              animation: fly-1 0.6s ease-in-out infinite alternate;
            }
            
            button:hover svg {
              transform: translateX(1.2em) rotate(45deg) scale(1.1);
            }
            
            button:hover span {
              transform: translateX(15em);
            }
            
            button:active {
              transform: scale(0.8);
            }
            
            @keyframes fly-1 {
              from {
                transform: translateY(0.1em);
              }
            
              to {
                transform: translateY(-0.1em);
              }
            }
            

</style>
  <div class="page page-center">
    
    <div class="container container-tight py-4">

      <div class="card card-md">
        <div class="card-body">
          <h1 class="h2 text-center mb-4 " >Contact Us </h1>
          <h3 class="h2 text-center mb-3">Have questions about service, please contact us.</h3>

    
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
                
                <label class="form-label">Message</label>
                <!-- <textarea rows="5" class="form-control" placeholder="Here can be your description">  </textarea> -->
                <textarea class="form-control" id="message" name ="message" data-bs-toggle="autosize" placeholder="Type something…"></textarea>
  
              </div>
            
            
            <div class="form-footer">
              
          <button type="submit" class="btn btn-primary w-100">
            
            <div class="svg-wrapper-1">
            <div class="svg-wrapper">
              <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" fill="currentColor"></path>
              </svg>
            </div>
          </div>
          <span>Send Email</span>

        </button> 
          
            </div>



          </form>
        </div>

      </div>

      
    </div>
  </div>
  <!-- Libs JS -->
  <!-- Tabler Core -->
