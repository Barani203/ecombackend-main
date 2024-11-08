import React from "react";
import { Link } from "react-router-dom";

function Createapointment() {
  return (
    <div className="container-fluid">
      <div className="row" id="header">
        <div className="col-3 pt-2" id="arrow">
         <Link to={'/home'}> <a href="">
            <i class="fa-solid fa-arrow-left"></i>
          </a></Link>
        </div>
        <div className="col-4">
          <h2>Create Appointment</h2>
        </div>
      </div>

    <div className="row" id="createbox">
        <div className="col-4 d-flex justify-content-start ">
            <img style={{width:150}} src="./img/Group 91.png"/>        
        </div>
        
        <div className="col-6 d-flex justify-content-end " >
        <Link to={'/online-consultation'}><a href=""><h1 className="htag">Online Consultation</h1></a>
        </Link>
        </div>


    </div>


    <div className="row" id="createbox">
        <div className="col-4 d-flex justify-content-start ">
            <img style={{width:150}} src="./img/image 20.png"/>        
        </div>
        
        <div className="col-6 d-flex justify-content-end " >
        <h1 className="htag">Offline Consultation</h1>

        </div>


    </div>

    </div>
  );
}

export default Createapointment;
