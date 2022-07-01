import React,{useRef,useContext} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { Main } from '../../context/MainContext'
const LoginForm = () => {
    const {setIsLogged,HideWarning,warning} =useContext(Main)
const navigate=useNavigate()
const phon=useRef(null)
const a=JSON.parse(localStorage.getItem("massagedata1"))

const passwor=useRef(null)
if(a==null)
HideWarning(true)
    function handleSubmit(e){
e.preventDefault()
function data(b,c){
        this.phon=b;
        this.passwor=c;
     }
     const z= new data(phon.current.value,passwor.current.value)
if(z.phon===a.phone && z.passwor===a.password)
{setIsLogged(true)
navigate("/")
localStorage.setItem("wasloggedin","Logged in")
}
else if(z.phon!==a.phone && z.passwor===a.password)
alert("Invalid Phone kindly try again")
else if(z.phon===a.phone && z.passwor!==a.password)
alert("Invalid Password kindly try again")
else if(z.phon!==a.phone && z.passwor!==a.password)
alert("Invalid Phone and Password kindly try again")
    }
  return (
    <div style={{display:"flex",gap:"20px",flexDirection:"column",width:"100%",marginTop:"2vw",alignItems:"center"}}>
        <h1> Login Below</h1>
          <form onSubmit={handleSubmit}>
        <input ref={phon} style={{width:"100%"}} placeholder='Enter your number' className='phone' type="number"/>
        <br/>
        <input ref={passwor} style={{width:"100%"}} className='name' placeholder='Enter your Password' type="text"/>
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