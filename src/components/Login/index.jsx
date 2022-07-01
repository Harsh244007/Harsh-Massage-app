import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { Main } from '../../context/MainContext'
import LoginForm from "./loginForm"
const Index = () => {
const {IsLogged,setIsLogged,wasLogged} =useContext(Main)
if(wasLogged)
setIsLogged(true)
  return (
    <>
    {
    IsLogged?
    <Navigate to="/"></Navigate>
    :<LoginForm/>
    }
    {/* <h1>ha</h1> */}
    </>
  )
}

export default Index