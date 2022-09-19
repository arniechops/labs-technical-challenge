import './App.css';

import Nav from './components/Nav';
import Courses from './components/Courses';
import Cart from './components/Cart';
import AppRoot from './components/AppRoot';
import React, {useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import Checkout from './components/Checkout';

function App() {

  const [checkoutCourses, setCheckoutCourses] = useState([]); 

  function handleCheckout(checkoutCourses: any) {
    setCheckoutCourses(checkoutCourses)
  }

  return <Routes>
    <Route path='/' element={<AppRoot handleCheckout={handleCheckout}/>}/>
    <Route path='/checkout' element={<Checkout/>}/>
  </Routes>

  // return (
  //   <>
  //     <div style={{
  //       width: '100%',
  //       boxSizing: 'border-box',
  //       padding: '0 calc(1rem + 10%)',
  //     }}>
        
  //       <AppRoot/>
  //     </div>
  //   </>
  // );
}

export default App;
