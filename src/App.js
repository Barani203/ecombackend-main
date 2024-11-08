import Home from './Home';
import Login from './Login';
import './App.css';
import './style.css'
import Createapointment from './Createapointment';
import Onlineconsultation from './Onlineconsultation';
import Doctordetails from './Doctordetails';
import Bookappointment from './Bookappointment';
import Patientdetail from './Patientdetail';
import Onlinebooking from './Onlinebooking';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
<div className="App">
  
      <Routes>
        <Route path='/'element={<Login/>}></Route>
        <Route path='/home'element={<Home/>}></Route>
        <Route path='/create'element={<Createapointment/>}/>
        <Route path='/online-consultation'element={<Onlineconsultation/>}/>
        <Route path='/docter-detail'element={<Doctordetails/>}/>
        <Route path='/slot-booking'element={<Bookappointment/>}/>
        <Route path='/patient'element={<Patientdetail/>}/>
        <Route path='/booking-success'element={<Onlinebooking/>}/>
      </Routes>
    
  </div>

    </BrowserRouter>
  );
}

export default App;

    {/* <Login></Login> */}
      {/* <Home></Home> */}
      {/* <Createapointment></Createapointment> */}
      {/* <Onlineconsultation></Onlineconsultation>   */}
      {/* <Doctordetails></Doctordetails> */}
      {/* <Bookappointment></Bookappointment> */}
      {/* <Patientdetail></Patientdetail> */}
      {/* <Onlinebooking></Onlinebooking> */}