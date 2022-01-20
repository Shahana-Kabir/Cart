import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data';
import NewCartItem from './NewCartItem';
import Navbar from './Navbar';
import './NewContext.css';

const NewContext = ()=>{
    const[cart, setCart] = useState(cartItems);
    // const[total, setTotal] = useState([]);

    const removeItem = (id)=>{
        console.log(id);
        setCart(cart.filter((oneItem)=> oneItem.id !== id))
        // setTotal([...total, cart.price]);
        
    }
    console.log(cart);

    let total = 0
    cart.forEach(item => total += item.price * item.amount) 
 
    const increaseAmount = (id) => {
        const item = cart.find(i => i.id === id)
        item.amount += 1
        console.log(id);
        console.log(item.amount); 
        setCart(cart.map(i => i.id === id? {...i, amount:item.amount}: {...i}));     
    }

    const decreaseAmount = (id) => {
        const item = cart.find(i => i.id === id)
        item.amount -= 1
        console.log(id);
        console.log(item.amount); 
        setCart(cart.map(i => i.id === id? {...i, amount:item.amount}: {...i}));     
    }

    let totalItems = 0;
    cart.forEach(item => totalItems += item.amount);
   
    console.log(cart);

    return(
        <div>
            <Navbar totalItems = {totalItems}/>
            {cart.map((singleItem)=> <NewCartItem 
                                        singleId = {singleItem.id}                     
                                        title = {singleItem.title}
                                        price = {singleItem.price}
                                        img = {singleItem.img}
                                        amount = {singleItem.amount}
                                        removeItem = {removeItem}
                                        increaseAmount = {increaseAmount}
                                        decreaseAmount = {decreaseAmount} 
                                        />
                                        ) }

                                        
                                        { cart.length> 0?<div > <h3 className = "newContext__para">Total price:</h3> <p>{total}$</p></div>: ''}
                                        
                                    
        </div>
    )
}
export default NewContext;