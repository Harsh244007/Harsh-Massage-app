import React from 'react'
import { useNavigate } from 'react-router-dom';
import Times from './Times.jsx'

const Time=(props)=> {
    
    const navigate=useNavigate()
 function submit(){
    alert("Success your booking is confirmed you will get all details in Email shortly.")
// setTimeout(() => {
    navigate("/")

 }
 return (
 <div>
  {props.showTime ? <><Times date={props.date}/>
   <button style={{width:"50%",margin:"2vw 2vw 1vw 6vw",textAlign:"center"}} onClick={submit} >Submit</button> 
   </>: null}
 
 </div>
  )
}

export default Time;