import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import CheckoutCourse from './CheckoutCourse'
import '../css/style.css'

export default function Checkout() {
  
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
