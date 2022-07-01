import React,{useContext,useRef} from 'react'
import { Link,useNavigate } from 'react-router-dom'

const Second = () => {
    const Navigate=useNavigate()
    const email=useRef(null)
    const gender=useRef(null)
    const time=useRef(null)
    function handleSubmit(e){
    e.preventDefault()
    var a=[];
    a.push(email.current.value)
    a.push(gender.current.value)
    a.push(time.current.value)
    localStorage.setItem("massagedata2",a)
    Navigate("/login") 
    }
    const prev=()=>{
Navigate("/register")
    }
  return (
 <div style={{display:"flex",gap:"20px",flexDirection:"column",width:"100%",marginTop:"2vw",alignItems:"center"}}>
        <h1>Registration Page 2</h1>
          <form onSubmit={handleSubmit}>
            
        <input ref={email} style={{width:"100%"}} className='email' placeholder='Enter your Email' type="email"/>
        <select ref={gender} style={{width:"50%"}} name='Gender' >
            	<option value="none">Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
        </select>
        
        <select ref={time} style={{width:"50%"}} name='time' >
            	<option value="none">Prefered Day</option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
            <option value="Sunday">Sunday</option>
            
        </select>
        
        <br/>
        <br/>
        
         <button style={{margin:"0 2vw"}} onClick={prev} type="button">Previous page</button>
         <button style={{margin:"0 2vw"}} type="submit">Next page</button>
         
</form>
</div>
  )
}

export default Second