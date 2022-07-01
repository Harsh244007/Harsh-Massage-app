import React, { useContext, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { Main } from '../../context/MainContext'
const Index = () => {
const {IsLogged,setIsLogged,wasLogged} =useContext(Main)
useEffect(()=>{
  
})
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
<h3>You had choose prefered day as {a2.time}</h3>
<h3>Please find all off our massage service below.</h3>
</div>:    <Navigate to="/login"></Navigate>
    
    }
    {/* <h1>harsh</h1> */}
    </>
  )
}

export default Index