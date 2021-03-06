import React, { useContext,useState } from 'react'
import Calendar from 'react-calendar'; 
import Time from './Time.jsx'

const Calendars = () => {
 const [date, setDate] = useState(new Date())
const [showTime, setShowTime] = useState(false)

    return (
    <div className="app">
   <h1 className="header">FinalBooking Calendar</h1>
   <h4 className="header">Kindly choose your prefered Date and Time slot.</h4>
 <div>
    <Calendar onChange={setDate} value={date} onClickDay={() => setShowTime(true)}/>
   </div>

   {date.length > 0 ? (
   <p>
     <span>Start:</span>
     {date[0].toDateString()}
     &nbsp;
     &nbsp;
     <span>End:</span>{date[1].toDateString()}
   </p>
          ) : (
   <p>
      <span>Default selected date:</span>{date.toDateString()}
   </p> 
          )
   }
   <Time showTime={showTime} date={date}/>
 </div>
  )
}

export default Calendars