import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Teacher from '../teacher/Teacher';
import "./main.css"

const Main = () => {
    const [teachers, setteachers] = useState([])
    const [cart, setcart] = useState([])
    useEffect(() => {
        fetch('./mit.json')
            .then(res => res.json())
            .then(data => setteachers(data))
    }, [])
    const handleAddToCart = (id) => {
        const newCart = [...cart, teachers]
        setcart(newCart)
        // console.log("id", id)

    }
    return (
        <div className="teacher-part">
            <div className="teacher-body">
                {
                    teachers.map(teacher => <Teacher
                        key={teacher.id}
                        teachers={teacher}
                        handleAddToCart={handleAddToCart}>
                    </Teacher>)
                }
            </div>
            <div className="body-Summary">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Main;