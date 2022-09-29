import React from 'react';
import './CartList.css'
import userPic from '../../images/user-pic.jpg'

const CartList = ({cart}) => {
    console.log(cart)
    let time=0;
    for(const gym of cart){
        time=time+gym.time;
    }
    return (
        <div className='cart-list'>
            <div className='user-container'>
                <img src={userPic} alt="" />
                <div> 
                    <p><b>Samaul Haque</b></p>
                    <p><small>Dhaka, Bangladesh</small></p>
                </div>
            </div>
            <div className='user-details-container'>
                <div className='user-details'>
                    <p><b>70</b><small>kg</small></p>
                    <p><small>Weight</small></p>
                </div>
                <div className='user-details'>
                    <p><b>6.5</b></p>
                    <p><small>Height</small></p>
                </div>
                <div className='user-details'>
                    <p><b>30</b><small>yrs</small></p>
                    <p><small>Age</small></p>
                </div>
            </div>
            <h3>Add A Break</h3>
            <div className='break-container'>
                <div className='break-time'>
                    <p>20<small>s</small></p>
                </div>
                <div className='break-time'>
                    <p>30<small>s</small></p>
                </div>
                <div className='break-time'>
                    <p>40<small>s</small></p>
                </div>
                <div className='break-time'>
                    <p>50<small>s</small></p>
                </div>
            </div>
            <h3>Exercise Details</h3>
            <div className='exercise-details'>
                <p>Exercise Time:</p> <p>{time} Seconds</p>
            </div> 
            <div className='exercise-details'>
                <p>Break Time:</p> <p>30 Seconds</p>
            </div> 

            <button className='activity-btn'>Activity Completed</button>
        </div>
    );
};

export default CartList;