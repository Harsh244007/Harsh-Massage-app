import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Main } from "../context/MainContext"
const NavBar = () => {
const {IsLogged,setIsLogged,setwasLogged} =useContext(Main)
// console.log(IsLogged)
const logout=()=>{
    localStorage.removeItem("wasloggedin")
setIsLogged(false)
setwasLogged(false)
}
  return (
    <div>
        <Link to="/"><button>Home</button></Link>
        {
            IsLogged?
            <Link to="/login"><button onClick={logout}>LogOut</button></Link>
         :
        <><Link to="/login"><button>Login</button></Link>

        <Link to="/register"><button>Register</button></Link>   
        </>}
    </div>
  )
}

export default NavBar