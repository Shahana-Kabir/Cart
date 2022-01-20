import React, { useState, useContext, useReducer, useEffect } from 'react'
import CartItem from './CartItem'
import cartItems from './data'
import reducer from './reducer'

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project'
// const AppContext = React.createContext()

// const AppProvider = ({ children }) => {
//   const [cart, setCart] = useState(cartItems)

//   return (
//     <AppContext.Provider
//       value={{
//         cart,
//       }}
//     >
//       {children}
//     </AppContext.Provider>
//   )
// }
// // make sure use
// export const useGlobalContext = () => {
//   return useContext(AppContext)
// }

// export { AppContext, AppProvider }

const Context = ()=>{
  const [itemsIntheCart, setItemsIntheCart] = useState([cartItems]);
  const[count,setCount] = useState(cartItems[0].amount);
  console.log(itemsIntheCart);
  console.log(count);

  
  
  return(
    <div className = "context">
      {itemsIntheCart[0].map((item)=> <div className = "context__sides">
                                        <div className = "context__left">
                                          <p>{item.title}</p>
                                          <p>{item.price}$</p>
                                          <img src = {item.img} className = "context__img"/>
                                        </div>
                                        <div className = "context__right">
                                          <button className='amount-btn' onClick={()=>setCount(count +1)}>
                                              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
                                                <path d='M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z' />
                                              </svg>
                                        </button>
                                          {count}
                                         <button className='amount-btn' onClick={() => console.log('decrease')}>
                                                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
                                                  <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                                                </svg>
        </button>
                                        
                                        </div>
                                      </div>)}
    </div>
  )

}
export default Context;
