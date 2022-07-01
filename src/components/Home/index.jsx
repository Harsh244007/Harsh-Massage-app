import React, { useContext, useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { Main } from '../../context/MainContext'

const Index = () => {
const {IsLogged,setIsLogged,wasLogged} =useContext(Main)
useEffect(()=>{
  
})
const navigate=useNavigate()
const Calender=()=>{
  navigate("/bookingpage")
}
if(wasLogged)
setIsLogged(true)
if(IsLogged){
  var a1=JSON.parse(localStorage.getItem("massagedata1"))
  var a2=JSON.parse(localStorage.getItem("massagedata2"))
  // console.log(a1[0],a2)
}
  return (
<>
    {
    IsLogged?
<div><h2>Welcome {a1.name}</h2>
<h3>You had choose prefered day as {a2.time} and {a2.prefered} Massage.</h3>
<h3>Please find all off our massage service below along with booking schedule.</h3>
<ul>
  <li>Swedish Massage</li>
  <p>Swedish Massage is a gentle full body massage that's great for everyone.</p>
  <button onClick={Calender}> Book now</button>
</ul>
<ul>
  <li>Hot Stone Massage</li>
  <p>Hot Stone Massage is a gentle full body massage that's great for everyone.</p>
    <button onClick={Calender}> Book now</button>
</ul>
<ul>
  <li>Aromatherapy Massage</li>
  <p>Aromatherapy Massage is a gentle full body massage that's great for everyone.
   </p>     <button onClick={Calender}> Book now</button>

</ul>
<ul>
  <li>Deep tissue Massage</li>
  <p>Deep tissue Massage is a gentle full body massage that's great for everyone.
  </p>     <button onClick={Calender}> Book now</button>
 
</ul>
<ul>
  <li>Sports Massage</li>
  <p>Sports Massage is a gentle full body massage that's great for everyone.</p>
    <button onClick={Calender}> Book now</button>
</ul>
<ul>
  <li>Trigger Point Massage</li>
  <p>Trigger Point Massagee is a gentle full body massage that's great for everyone.</p>
    <button onClick={Calender}> Book now</button>
</ul>


</div>:    <Navigate to="/login"></Navigate>
    
    }
    {/* <h1>harsh</h1> */}
    </>
  )
}

export default Index