import React from "react";
import { Link } from "react-router-dom";

function Onlineconsultation() {
  return (
    <div className="container-fluid">
      <div className="row" id="header">
        <div className="col-3 pt-2" id="arrow">
        <Link to={'/create'}>  <a href="">
            <i class="fa-solid fa-arrow-left"></i>
          </a></Link>
        </div>
        <div className="col-4">
          <h2>Create Appointment</h2>
        </div>
      </div>
      <div className="row">
        <div className="col d-flex justify-cotent-center">
        <nav class="navbar navbar-light bg-light">
  <form class="form-inline">
    <input class="form-control mr-sm-2 " type="search" placeholder="Search" aria-label="Search"/>
    {/* <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
  </form>
</nav>
        </div>
      </div>


      {/*  */}

      <div class="container profile-page">
        <div class="row">
          <div class="col-xl-6 col-lg-7 col-md-12">
            <div class="card profile-header">
              <div class="body">
                <div class="row">
                  <div class="col-lg-4 col-md-4 col-12">
                    <div class="profile-image float-md-right">
                      {" "}
                      <img
                        style={{ width: 160 }}
                        src="./img/doc1.png"
                        alt=""
                      />{" "}
                    </div>
                  </div>
                  <div class="col-lg-8 col-md-8 col-12">
                    <h4 class="m-t-0 m-b-0">
                      <strong>Dr. Vijayakumar</strong>{" "}
                    </h4>
                    <span class="job_post">General Physician</span>
                    <p style={{ color: "#1F2587" }}>11 years Exp</p>
                    <p>Consultation Fee ₹ 300</p>
                    <p>09.00 AM - 07.00 PM Today</p>
                  </div>
                  <div
                    className="col-lg-8 col-md-8 col-12 d-flex justify-content-end"
                    id="profilebox"
                  >
                     <Link to={'/docter-detail'}><a href="">View Profile</a></Link>
                    <Link to={'/docter-detail'}><button className="bt">Booking Appointment</button></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-6 col-lg-7 col-md-12">
            <div class="card profile-header">
              <div class="body">
                <div class="row">
                  <div class="col-lg-4 col-md-4 col-12">
                    <div class="profile-image float-md-right">
                      {" "}
                      <img src="./img/doc.png" alt="" />{" "}
                    </div>
                  </div>
                  <div class="col-lg-8 col-md-8 col-12">
                    <h4 class="m-t-0 m-b-0">
                      <strong>Dr. Swetha</strong>
                    </h4>
                    <span class="job_post">General Physician</span>
                    <p style={{ color: "#1F2587" }}>5 years Exp</p>
                    <p>Consultation Fee ₹ 250</p>
                    <p>10.00 AM - 06.00 PM Today</p>
                  </div>
                  <div className="col-lg-8 col-md-8 col-12 d-flex justify-content-end">
                  <Link to={'/docter-detail'}><a href="">View Profile</a></Link>
                  <Link to={'/docter-detail'}><button className="bt">Booking Appointment</button></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-xl-6 col-lg-7 col-md-12">
            <div class="card profile-header">
              <div class="body">
                <div class="row">
                  <div class="col-lg-4 col-md-4 col-12">
                    <div class="profile-image float-md-right">
                      {" "}
                      <img
                        style={{ width: 170 }}
                        src="./img/doc3.png"
                        alt=""
                      />{" "}
                    </div>
                  </div>
                  <div class="col-lg-8 col-md-8 col-12">
                    <h4 class="m-t-0 m-b-0">
                      <strong>Dr. Hardin</strong>
                    </h4>
                    <span class="job_post">General physician</span>
                    <p style={{ color: "#1F2587" }}>5 years Exp</p>
                    <p>Consultation Fee ₹ 300</p>
                    <p>09.00 AM - 07.00 PM Today</p>
                  </div>
                  <div className="col-lg-8 col-md-8 col-12 d-flex justify-content-end">
                  <Link to={'/docter-detail'}><a href="">View Profile</a></Link>
                    <Link to={'/docter-detail'}><button className="bt">Booking Appointment</button></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-6 col-lg-7 col-md-12">
            <div class="card profile-header">
              <div class="body">
                <div class="row">
                  <div class="col-lg-4 col-md-4 col-12">
                    <div class="profile-image float-md-right">
                      {" "}
                      <img src="./img/doc4.png" alt="" />{" "}
                    </div>
                  </div>
                  <div class="col-lg-8 col-md-8 col-12">
                    <h4 class="m-t-0 m-b-0">
                      <strong>Dr. Tessa</strong>
                    </h4>
                    <span class="job_post">General Physician</span>
                    <p style={{ color: "#1F2587" }}>6 years Exp</p>
                    <p>Consultation Fee ₹ 300</p>
                    <p>09.00 AM - 010.00 PM Today</p>
                  </div>
                  <div className="col-lg-8 col-md-8 col-12 d-flex justify-content-end">
                  <Link to={'/docter-detail'}><a href="">View Profile</a></Link>
                  <Link to={'/docter-detail'}><button className="bt">Booking Appointment</button></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Onlineconsultation;
