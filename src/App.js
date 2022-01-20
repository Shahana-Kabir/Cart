import React from 'react'
import { useGlobalContext } from './context'
import Context from './context';
import NewContext from './NewContext';
import NewCartItem from './NewCartItem';
import NewCartContainer from './NewCartContainer';

// components
import Navbar from './Navbar'
import CartContainer from './CartContainer'
// items

function App() {
  // if (loading) {
  //   return (
  //     <div className='loading'>
  //       <h1>Loading...</h1>
  //     </div>
  //   )
  // }
  return (
    <main>
      {/* <Navbar /> */}
      {/* <CartContainer /> */}
      {/* <Context /> */}
      <NewContext />
    </main>
  )
}

export default App
