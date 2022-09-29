import React from 'react';
import './Gym.css'

const Gym = (props) => {
    const{handler, gym}=props;
    const {name,img,time}=gym
    return (
        <div className='gym'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>Time Required: {time}s</p>
            <button onClick={()=> handler(gym)}>Add To List</button>
        </div>
    );
};

export default Gym;