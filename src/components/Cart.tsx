import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AppContext } from './AppRoot';
import CartCourse from './CartCourse'

export default function Cart({courses}: {courses: any[]}) {
  const {handleCheckout, cartCourses} = useContext(AppContext);
  const navigate = useNavigate()

  function handleClick() {
    navigate('/checkout', {state: {cartCourses}})
  }

  return (
      <>
        <div className='cart-container'>
          <div className='cart'>
            <h2>
              Cart
            </h2>
            {courses.length === 0 && <p>Your cart is empty!</p>}
            {courses.map((c) => {
              return <CartCourse course={c}/>
            })}
            {courses.length !== 0 && 
                <button className='btn btn-purple' onClick={handleClick}>Checkout</button>
            }
          </div>
        </div>
    </>
  )
}
