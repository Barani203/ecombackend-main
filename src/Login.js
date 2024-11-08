import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="container">
        <div className="row justify-content-center mt-2 mb-2">
            <img className=""  style = { {width :200}}src="../img/img2.jpg" ></img>
        </div>
        <div className="row justify-content-center mb-3" style={{color:"blue"}}>
            <div className="col-sm-5 ">
           <h5>Health Desk</h5>
            </div>
        </div>
  
        <div className="row justify-content-center mb-1">
            <div className="col-sm-5 ">
           <h2>Corporate Login</h2>
           <h6 style={{color:"blue"}}> Hi, Welcome Back!</h6>
            </div>
        </div>

      <div className="row justify-content-center">
        <div className="col-sm-5">
          <form>
            <div data-mdb-input-init class="form-outline mb-4">
              <input type="email" id="form2Example1" class="form-control" />
              <label class="form-label" for="form2Example1">
                Email address
              </label>
            </div>

            <div data-mdb-input-init class="form-outline mb-4">
              <input type="password" id="form2Example2" class="form-control" />
              <label class="form-label" for="form2Example2">
                Password
              </label>
            </div>

            <div class="row mb-4">
              <div class="col d-flex justify-content-center">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="form2Example31"
                    checked
                  />
                  <label class="form-check-label" for="form2Example31">
                    {" "}
                    Remember me{" "}
                  </label>
                </div>
              </div>

              <div class="col">
                <a href="#!">Forgot password?</a>
              </div>
            </div>

          <Link to={"/home"}>  <button
              type="button"
              data-mdb-button-init
              data-mdb-ripple-init
              class="bt"
            >
              Sign in
            </button></Link>

            <div class="text-center">
              <p>
                Not a member? <a href="#!">Register</a>
              </p>
              <p>or sign up with:</p>
              <button
                type="button"
                data-mdb-button-init
                data-mdb-ripple-init
                class="btn btn-link btn-floating mx-1"
              >
                <i class="fab fa-facebook-f"></i>
              </button>

              <button
                type="button"
                data-mdb-button-init
                data-mdb-ripple-init
                class="btn btn-link btn-floating mx-1"
              >
                <i class="fab fa-google"></i>
              </button>

              <button
                type="button"
                data-mdb-button-init
                data-mdb-ripple-init
                class="btn btn-link btn-floating mx-1"
              >
                <i class="fab fa-twitter"></i>
              </button>

              <button
                type="button"
                data-mdb-button-init
                data-mdb-ripple-init
                class="btn btn-link btn-floating mx-1"
              >
               <a href="https://github.com/Barani203"> <i class="fab fa-github"></i></a>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
