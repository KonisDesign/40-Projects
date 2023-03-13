import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CartData } from '../data/CartData';

export default function Complete() {

    const navidate = useNavigate();
    CartData.length = 0;

    return (
        <div className='cart-container'>
            <div className='head'>
                <h1 className='white'>Cart</h1>
                <h3 className='white'><i className="fa-solid fa-chevron-right"></i></h3>
                <h1 className='white'>Checkout</h1>
                <h3 className='white'><i className="fa-solid fa-chevron-right"></i></h3>
                <h1 className='white'>Order Complete</h1>
            </div>
            <h1 className='bronze'>Order Complete</h1>
            <i className="fa-regular fa-face-smile-beam"></i>
            <p className='white'>Your order has been sent to us, you will receive a confirmation email</p>
            <button className='primary-button' onClick={() => navidate('/')}>Home</button>
        </div>
    )
}
