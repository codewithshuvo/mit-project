import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./Teacher.css"

const Teacher = (props) => {
    // console.log("this is key", props.teachers)
    const { id, name, img, email, salary, phone, age } = props.teachers
    // console.log(name)
    const element = <FontAwesomeIcon icon={faShoppingCart} />

    return (


        <div className="teachers-part">
            <article className="sub-part-teacher">
                <div className="teacher-photo">
                    <img src={img} alt="" />

                    {/* This is teacher information part  */}
                    <div className="teacher-information">
                        <h2>{name}</h2>
                        <p><small>Email:{email}</small></p>
                        <p>Age:{age}</p>
                        <p><small>phone:{phone}</small></p>
                        <p>salary:{salary}$</p>
                        <button onClick={() => props.handleAddToCart(id)}>
                            {element}
                            Add To Cart
                        </button>
                    </div>
                </div>
            </article>
        </div>

    );
};

export default Teacher;