import React,{useRef,useContext, useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { Main } from '../../context/MainContext'
const LoginForm = () => {
    const {setIsLogged} =useContext(Main)
const navigate=useNavigate()
const phone=useRef(null)
const a=localStorage.getItem("massagedata1")

const password=useRef(null)
const [warning,HideWarning]=useState(false)
if(a==null || undefined)
HideWarning(true)
    function handleSubmit(e){
e.preventDefault()
if(phone==a[0] && password==a[1])
{setIsLogged(true)
navigate("/")}
else if(phone!=a[0] && password==a[1])
alert("Invalid Phone kindly try again")
else if(phone==a[0] && password!=a[1])
alert("Invalid Password kindly try again")
else if(phone!=a[0] && password!=a[1])
alert("Invalid Phone and Password kindly try again")
    }
  return (
    <div style={{display:"flex",gap:"20px",flexDirection:"column",width:"100%",marginTop:"2vw",alignItems:"center"}}>
        <h1> Login Below</h1>
          <form onSubmit={handleSubmit}>
        <input ref={phone} style={{width:"100%"}} placeholder='Enter your number' className='phone' type="number"/>
        <br/>
        <input ref={password} style={{width:"100%"}} className='name' placeholder='Enter your Password' type="text"/>
        <br/>
        <br/>
         <button style={{margin:"0 2vw"}} type="submit">Log in</button>
         <Link to="/register" >
         <button style={{margin:"0 2vw"}} type="submit">Register</button>
         </Link>
</form>
{warning?<h2>If you are not registered kindly register above here.</h2>:""}
</div>
  )
}

export default LoginForm