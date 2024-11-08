import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <div className="container-fluid pb-2">
        <div className="row" id="navbarback">
          <div className="col-sm-10 d-flex  mt-1 mb-4">
            <h3 style={{ color: "white" }}> Hi Deepa!</h3>
          </div>
          <div className="col-sm-1 pr20px d-flex justify-content-end ">
            <img
              className="imgnav"
              src="./img/alert.png"
              alt="alert"
              style={{ width: 30 }}
            ></img>
          </div>
          <div className="col-sm-1 d-flex justify-content-end">
            <img
              className="imgnav"
              src="./img/notifycation.png"
              alt="notifycation"
            ></img>
          </div>
        </div>
        <div className="row" id="offcircle">
          <div className="col-xl justify-content-center mt-5">
            <img src="./img/frame1.png" className="imgframe" alt="frame1"></img>
          </div>
        </div>

        <div className="row pt-5">
          <div className="col-4 d-flex justify-content-around">
            <h4 style={{ color: "#1F2587" }}>Our Services</h4>
          </div>
        </div>

        <div class="row pt-5">
          <div class="col-4">
            <img src="./img/doc.png" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Find a Doctor</h5>
            </div>
          </div>
          <div class="col-4">
            <img src="./img/blood.png" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Book Labtaast</h5>
            </div>
          </div>
          <div class="col-4">
            <img src="./img/heart.png" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Heart Tracker</h5>
            </div>
          </div>

          {/* <div class="col-4">
            <img src="./img/doc.png" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Find a Doctor</h5>
            </div>
          </div> */}
        </div>
      </div>
      <div className="container pt-5" id="box">
        <div className="row">
          <div className="col-6">
            <h2>Book Annual Health</h2>
            <h2 className="textalin">Checkups</h2>
            <img src="./img/Group 2061.png" />

           <Link to={"/create"}> <button type="button" className="btn">
              {" "}
              Booking Now
            </button></Link>
          </div>

          <div className="col-6 d-flex justify-content-end">
            <img src="./img/Group 91.png"></img>
            {/* <img src="./img/Ellipse 8 (1).png"></img>
            <img src="./img/Ellipse 10.png"/> */}
          </div>
        </div>

        <div className="row pt-5">
          <div className="col-4 d-flex justify-content-around">
            <h4>Quick Access</h4>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-4" id="iconbox">
            <img src="./img/hleath (1).png" />
            <h6>My Doctors</h6>
          </div>
          <div className="col-4" id="iconbox">
            <img src="./img/hleath (2).png" />
            <h6>Create Appointment</h6>
          </div>
          <div className="col-4" id="iconbox">
            <img src="./img/hleath (3).png" />
            <h6>My Reports</h6>
          </div>
        </div>

        <div className="row"id="footer">
            <div className="col-3">
            <img src="./img/Frame 9.png" />
            <Link to={'/'}><h6>Home</h6></Link>
            </div>
            <div className="col-3">
            <img src="./img/Frame 11.png" />
            <h6>Records</h6>
            </div>
            <div className="col-3">
            <img src="./img/fluent_smartwatch-dot-24-regular.png" />
            <h6>Device</h6>
            </div>
            <div className="col-3">
            <img src="./img/Frame 12.png" />
            <h6>Profile</h6>
            </div>
        </div>
        
      </div>
    </>
  );
}

export default Home;
