import React,{useEffect, useState} from "react"
import { Routes,Route, Link } from "react-router-dom"
import { Main } from "./context/MainContext"
import Home from "./components/Home"
import Login from "./components/Login"
import Register from "./components/Register"
import NavBar from "./components/NavBar"
import Second from "./components/Register/stagetwo"
export default function App(){
const [wasLogged, setwasLogged] = useState(false)
useEffect(()=>{if(localStorage.getItem("wasloggedin")!=null){
setwasLogged(true)
}},[wasLogged])
const [IsLogged, setIsLogged] = useState(false)
const [warning,HideWarning]=useState(false)
const [stepone,setStepone]=useState({})
return(
  <>
  <Main.Provider value={{IsLogged,setIsLogged,wasLogged,setwasLogged,stepone,setStepone,warning,HideWarning}}>
  <NavBar/>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/Login" element={<Login/>} />
    <Route path="/Register" element={<Register/>} />
    <Route path="/Registersecondpage" element={<Second/>} />
    <Route path="*" element={<h1>Opps something is wrong please go back to home by clicking <Link to="/">here.</Link> </h1>} />
  </Routes>
  </Main.Provider>
  </>
)
}