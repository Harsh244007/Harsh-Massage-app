import React,{useContext,useRef} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { Main } from '../../context/MainContext'

const First = () => {
    const {stepone,setStepone}=useContext(Main)
      const name=useRef(null)
    const phone=useRef(null)
       const password=useRef(null) 
    const navigate =useNavigate()
    function handleSubmit(e){
        e.preventDefault()
     function data(a,b,c){
        this.name=a;
        this.phone=b;
        this.password=c;
     }
     const a= new data(name.current.value,phone.current.value,password.current.value)
    localStorage.setItem("massagedata1",JSON.stringify(a))
    navigate("/Registersecondpage") 
    }
  return (
 <div style={{display:"flex",gap:"20px",flexDirection:"column",width:"100%",marginTop:"2vw",alignItems:"center"}}>
        <h1>Register Below</h1>
          <form onSubmit={handleSubmit}>
        <input ref={name} style={{width:"100%"}} className='name' placeholder='Enter your Name' type="text"/>
        <input ref={phone} style={{width:"100%"}} placeholder='Enter your number' className='phone' type="number"/>
        <br/>
        <input ref={password} style={{width:"100%"}} className='password' placeholder='Enter your Password' type="text"/>
        <br/>
        <br/>
         <button style={{margin:"0 2vw"}} type="submit">Next page</button>
         
</form>
</div>
  )
}

export default First