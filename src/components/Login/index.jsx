import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { Main } from '../../context/MainContext'
import LoginForm from "./loginForm"
const Index = () => {
const {IsLogged} =useContext(Main)

console.log(IsLogged)
  return (
    <>
    {
    IsLogged?
    <Navigate to="/home"></Navigate>
    :<LoginForm/>
    }
    </>
  )
}

export default Index