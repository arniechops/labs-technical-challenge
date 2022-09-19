import React, { useContext } from 'react'
import { AppContext } from './AppRoot';
import '../css/style.css'

export default function CartCourse({course}: {course: any}) {

    //Component to display a course in the cart
    
    const {title, number} = course
    const {handleCartRemove} = useContext(AppContext);
    return (
    <div className='cart-course-card'>
        <h3>{title}</h3>
        <button className='btn btn-remove' onClick={() => handleCartRemove(number)}>Remove</button>
    </div>
  )
}
