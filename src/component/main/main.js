import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Teacher from '../teacher/Teacher';
import "./main.css"

const Main = () => {
    const [teachers, setteachers] = useState([])
    const [cart, setcart] = useState([])
    const [addedTeacher, setAddedTeacher] = useState([])
    useEffect(() => {
        fetch('./mit.json')
            .then(res => res.json())
            .then(data => setteachers(data))
    }, [])
    const handleAddToCart = (id) => {
        const addedTeacher = teachers.filter(teacher => {
            return teacher.id === id
        })
        const newCart = [...cart, addedTeacher[0]]
        setcart(newCart)
        setAddedTeacher(addedTeacher[0])
        // console.log("id", id)
        // console.log(addedTeacher[0].name)

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
                <Cart cart={cart} addedTeacher={addedTeacher}></Cart>
            </div>
        </div>
    );
};

export default Main;