import React, {useState} from 'react'
import './cartItem.css';

const NewCartItem = (props)=>{
    // const [count, setCount] = useState(props.amount);
    const [total, setTotal] = useState([]);
    // ()=> setCount(count+1)
    return(
        <div className = "cartItem">
            <div className = "cartItem__sides">
                                        <div className = "cartItem__left">
                                            <p>{props.title}</p>
                                          <img  src = {props.img} className = "cartItem__img"/>
                                          <p> {props.price}$</p>
                                          <button onClick= {()=>props.removeItem(props.singleId)}>Remove item</button>
                                        </div>
                                        <div className = "cartItem__right">
                                          <button className='amount-btn' onClick = {()=>props.increaseAmount(props.singleId)}>
                                              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
                                                <path d='M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z' />
                                              </svg>
                                        </button>
                                          {props.amount}
                                         <button className='amount-btn' onClick = {()=> props.decreaseAmount(props.singleId)}>
                                                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
                                                  <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                                                </svg>
                                        </button>  
                                                                 
                                        </div>
                                    

            </div>
              
            
    </div>
            
           
          )
}
export default NewCartItem;