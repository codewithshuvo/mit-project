import React from 'react';
import Teacher from '../teacher/Teacher';
import "./Cart.css"

const Cart = (props) => {
    // console.log(props.addedTeacher.name)


    return (
        <div>
            <h3>Overall Summary</h3>
            <h2>Teacher List:{props.cart.length}</h2>
            <h3 className="teacher-name">{props.addedTeacher.name}</h3>
            <h1>Total:{props.addedTeacher.salary}</h1>

        </div>
    );
};


export default Cart;