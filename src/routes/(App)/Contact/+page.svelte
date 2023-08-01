<script>
  export let data;
  export let form
	// import '../../../app.css';

</script>

<style>
.input {
 color: #000000;
 border: 2px solid #83838388;
 border-radius: 10px;
 background: transparent;


}

.input:active {
 box-shadow: 2px 2px 15px #4169e1 inset;
}


.page-centerr {
    /* Use Flexbox to center the div */
    display: flex;
    justify-content: center; /* Center horizontally */
    align-items: center; /* Center vertically */
  }

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
              transform: translateX(30em);
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
            .button-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
            

</style>

    
      <div class="page page-centerr">
      <div class="container container py-4">


  
    
    <div class="col-lg-12">
      <div class="row row-cards">
        <div class="col-12">
          <form class="card" action="?/sendMail" method="POST">
            <div class="card-body">
              <h1 class="h1 text-center mb-2 " >Contact Us </h1>
              <h3 class="h2 text-center mb-4">Have questions about service, please contact us.</h3>
    
              <div class="row row-cards">
  
                <div class="col-sm-6 col-md-6">
                  <div class="mb-3">
                    <label class="form-label">Company</label>
                    <input type="text" name="company" id="company" class="input form-control" placeholder="Company Name ">
                  </div>
                </div>

                <div class="col-sm-6 col-md-6">
                  <div class="mb-3">
                    <label class="form-label">Email address</label>
                    <input type="email" name="email" id="email" class="input form-control" placeholder="Destination Email">
                  </div>
                </div>


                <div class="col-sm-6 col-md-6">
                  <div class="mb-3">             
                    <label class="form-label">Message</label>
                    <!-- <textarea rows="5" class="form-control" placeholder="Here can be your description">  </textarea> -->
                    <textarea class="input form-control" id="message" name ="message" data-bs-toggle="autosize" placeholder="Type something…"></textarea>
      
                  </div>
                </div>


                <div class="col-sm-6 col-md-6">
                  <div class="mb-3">
                    <label class="form-label">Address</label>
                    <input type="text" class="input form-control" id="address" name ="address" placeholder="Company Address" >
                  </div>
                </div>
                <div class="col-sm-6 col-md-4">
                  <div class="mb-3">
                    <label class="form-label">City</label>
                    <input type="text" class="input form-control" id="city" name ="city" placeholder="City ">
                  </div>
                </div>
                <div class="col-sm-6 col-md-3">
                  <div class="mb-3">
                    <label class="form-label">Postal Code</label>
                    <input type="test" id="code" name ="code" class="input form-control" placeholder="ZIP Code">
                  </div>
                </div>
                <div class="col-md-5">
                  <div class="mb-3">
                    <label class="form-label">Country</label>
                    <select class="input form-control form-select" id="country" name ="country" >
                      <option id ="country">Germany</option>
                      <option id ="country" >Tunisia</option>
                      <option id ="country">French</option>
                      <option id ="country">Spain</option>
                    </select>
                  </div>
                </div>

                
              </div>
<br>
              <div class="button-container">
                    <button type="submit" class="btn btn-primary w-50">
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
            </div>

          </form>
        </div>

      </div>
    </div>
  </div>
  </div>
  <!-- Libs JS -->
  <!-- Tabler Core -->
      <!-- <div class="card card-md">
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

      </div> -->

