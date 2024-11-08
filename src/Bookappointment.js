import React from "react";
import { Link } from "react-router-dom";

export default function Bookappointment() {
  return (
    <>
      <div className="container-fluid">
        <div className="row" id="header">
          <div className="col-3 pt-2" id="arrow">
        <Link to={'/docter-detail'}>    <a href="">
              <i class="fa-solid fa-arrow-left"></i>
            </a></Link>
          </div>
          <div className="col-4">
            <h2>Create Appointment</h2>
          </div>
        </div>

        <div className="row">
          <div className=" flex-col-lg-3 ">
            <div class="form-outline datepicker">
              <input type="date" class="form-control " id="exampleDatepicker1" />
              <label for="exampleDatepicker1" class="form-label">
                Date
              </label>
            </div>
          </div>
          <div className=" flex-col-lg-3 mt-10">
            <div class="form-outline datepicker">
              <input type="time" class="form-control" id="exampleDatepicker1" />
              <label for="exampleDatepicker1" class="form-label">
                Time
              </label>
            </div>
          </div>
        </div>

        <div className="row">
            <div className="p-3 col-lg">
            <Link to={'/patient'}><span className="continue">Continue</span></Link>
            </div>
        </div>
      </div>
    </>
  );
}
