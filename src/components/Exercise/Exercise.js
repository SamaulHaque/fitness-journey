import React, { useEffect, useState } from 'react';
import CartList from '../CartList/CartList';
import Gym from '../Gym/Gym';
import './Exercise.css'

const Exercise = () => {
    const [gyms, setGyms]=useState([])
    const [cart, setCart]=useState([])
    useEffect(()=>{
        fetch('exercise.json')
        .then(res => res.json())
        .then(data => setGyms(data))
    },[])
    const addToCart=(gym)=>{
        console.log(gym)
        const newCart=[...cart, gym];
        setCart(newCart);
    }
    return (
        <div className='exercise-container'>
            <div className="gym-container">
                
                {
                    gyms.map(gym => <Gym 
                    key={gym.id}    
                    gym={gym}
                    handler={addToCart}
                    ></Gym>)
                }
            </div>
            <div className="cart-list-container">
                <CartList cart={cart}></CartList>
            </div>
        </div>

    );
};

export default Exercise;