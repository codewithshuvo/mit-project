import React from 'react';
import Teacher from '../teacher/Teacher';
import "./Cart.css"

const Cart = (props) => {


    return (
        <div>
            <h3>Order Summary</h3>
            <h2>Item Order:{props.cart.length}</h2>
            <h1>Total:</h1>

        </div>
    );
};


export default Cart;