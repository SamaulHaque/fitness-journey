import React, { useEffect, useState } from 'react';
import './CartList.css';
import userPic from '../../images/user-pic.jpg'
import { addToDb, getStoredCart } from '../../utilities/fackDb';

const CartList = ({cart}) => {
    const [brkTime, setBrkTime]=useState([])
    let time=0;
    for(const gym of cart){
        time=time+gym.time;
    }
    
    useEffect(()=>{
        const storedCart=getStoredCart();
        const savedCart=[];
            if(storedCart){
                const time=storedCart;
                storedCart.breakTime=time;
                savedCart.push(storedCart);
            }
    },[])

    const handlerBreakTime= (event)=>{
        const breakTime=event.target.innerText;
        setBrkTime(breakTime);
        addToDb(breakTime)
        

        // let breakTimes={};
        // breakTimes['break-time']=breakTime;
        // localStorage.setItem('break-time', JSON.stringify(breakTimes))

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
                <div>
                    <button onClick={(event)=>handlerBreakTime(event)} className='break-time'>20</button>
                </div>
                <div>
                    <button onClick={(event)=>handlerBreakTime(event)} className='break-time'>30</button>                
                </div>
                <div>
                    <button onClick={(event)=>handlerBreakTime(event)} className='break-time'>40</button>                
                </div>
                <div>
                    <button onClick={(event)=>handlerBreakTime(event)} className='break-time'>50</button>               
                </div>
            </div>
            <h3>Exercise Details</h3>
            <div className='exercise-details'>
                <p>Exercise Time:</p> <p>{time} Seconds</p>
            </div> 
            <div className='exercise-details'>
                <p>Break Time:</p> <p>{brkTime} Seconds</p>
            </div> 
            <button  className='activity-btn'>Activity Completed</button>
        </div>
    );
};

export default CartList;