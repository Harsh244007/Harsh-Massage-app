import React, { useContext } from 'react'
import {useState} from 'react';
import Calendar from 'react-calendar'; 
import Calendars from './Calendars'; 
import { Main } from '../../context/MainContext';
import { Navigate } from 'react-router-dom';
const Index = () => {

const {IsLogged} =useContext(Main)

    return(
    <>
    {IsLogged?<Calendars/>:<Navigate to="/login"></Navigate>

    }</>
)
}

export default Index