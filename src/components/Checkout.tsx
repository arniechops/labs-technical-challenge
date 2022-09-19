import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import CheckoutCourse from './CheckoutCourse'
import '../css/style.css'

export default function Checkout() {

  //The checkout page that gets displayed at the /checkout endpoint

  //Using hooks to navigate away from this page, useLocation helps me pass data between pages at different routes
  const location = useLocation();
  const courses = location.state['cartCourses'];
  const navigate = useNavigate()

  return (
    <div className='checkout-root'>
      <div>
        <h1>Thank you!</h1>
        <p>Here are the courses you have signed up for.</p>
      </div>
      <div>{courses.map((c:any) => {
        return <CheckoutCourse course={c}/>
      })}</div>
      <div className='btn-container'>
          <button className='btn btn-purple' onClick={()=>{
            navigate('/')
          }}>Back to Home</button>
      </div>
    </div>
    
  )
}
