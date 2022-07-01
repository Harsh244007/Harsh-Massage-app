import React,{useEffect,useState} from "react"
import { Routes,Route, Link } from "react-router-dom"
import { Main } from "./context/MainContext"
import Home from "./components/Home"
import Login from "./components/Login"
import Register from "./components/Register"
export default function App(){
return(
  <>
  <Main.Provider>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/Login" element={<Login/>} />
    <Route path="/Register" element={<Register/>} />
    <Route path="*" element={<h1>Opps something is wrong please go back to home by clicking <Link to="/">here.</Link> </h1>} />
  </Routes>
  </Main.Provider>
  </>
)
}