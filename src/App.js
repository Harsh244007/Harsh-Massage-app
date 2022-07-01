import React,{useEffect,useState} from "react"
import { Routes,Route, Link } from "react-router-dom"

export default function App(){
return(
  <>
  <Routes>
    <Route path="/" element={<h1>home</h1>} />
    <Route path="/Login" element={<h1>home</h1>} />
    <Route path="/Register" element={<h1>home</h1>} />
    <Route path="*" element={<h1>Opps something is wrong please go back to home by clicking <Link to="/">here.</Link> </h1>} />
  </Routes>
  </>
)
}