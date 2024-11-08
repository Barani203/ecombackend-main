import React from 'react'
import { Link } from 'react-router-dom'

export default function Patientdetail() {
  return (<>
    <div className="container-fluid">
      <div className="row" id="header">
        <div className="col-3 pt-2" id="arrow">
      <Link to={'/slot-booking'}>
      <a href="">
            <i class="fa-solid fa-arrow-left"></i>
          </a></Link>
        </div>
        <div className="col-4">
          <h2>Create Appointment</h2>
        </div>
      </div>

  <div className='row'>
    <div className='p-3 col-lg'>
        <h3 style={{color:"#1F2587"}} className='d-flex justify-content-start'>Choose Patient</h3>
<p className='d-flex justify-content-start'>Who’re you booking an appointment for?</p>

    </div>

  </div>

<div className='row'>
    <div className='p-3 col-lg'>
        <input type='menu' className=' w-10' placeholder='Vijay'></input>
    </div>
</div>

<div className='row'>
    <div className='p-3 col-lg'>
        <img src='./img/frame 562.png'></img>
    </div>
</div>


<div className='row'>
    <div className='p-3 col-lg  w-10'>
       <textarea className='textarea' placeholder='Write your problem'>Write your problem</textarea>

    </div>
</div>

<div className='row'>
    <div className='p-3 col-lg  w-10'>
<Link to={'/booking-success'}>    <span className="continue">Continue</span></Link>

    </div>
</div>
  </div>
  
  
  </>
  
  )
}
