import React from "react";
import { Link } from "react-router-dom";

export default function Onlinebooking() {
  return (
    <>
      <div className="container-fluid " id="fullback">
        <div className="row">
       <Link to={'/patient'}> <a href="">
            <i class="fa-solid fa-arrow-left"></i>
          </a></Link>
          <div className="col-lg ">
            <img className="p-5" src="./img/success.png"></img>
          </div>
        </div>

        <div className="row">
          <div className="col-lg p-3">
            <h2 className="p-5" style={{ color: "white" }}>
              Booking Successful
            </h2>
          </div>
        </div>


        <div className='row'>
    <div className='col-lg p-10'>
       <p className=" p-5"  style={{color:"white"}}>Appointment has been successfully scheduled.<br/> After receiving confirmation, please proceed to complete the payment process.</p>
       
        </div>
    </div>
   </div>
      
    </>
  );
}
