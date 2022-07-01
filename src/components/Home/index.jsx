import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { Main } from '../../context/MainContext'
const Index = () => {
const {IsLogged} =useContext(Main)

  return (
<>
    {
    IsLogged?
<div>Login</div>:    <Navigate to="/login"></Navigate>
    
    }
    </>
  )
}

export default Index