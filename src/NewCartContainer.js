import React, {useState} from 'react';
import NewContext from './NewContext';

const NewCartContainer = (props)=> {
    return(
        <div>
            <NewContext />
            <button onClick = {()=> props.totalPrice()}>Total</button>
        </div>
    )

}
export default NewCartContainer;