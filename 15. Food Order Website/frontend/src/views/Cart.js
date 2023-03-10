import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CartData } from '../data/CartData'
import { Data } from '../data/Data'
import './Style.css'

export default function Cart() {

    const navigate = useNavigate();

    const total = () => {

        let i = 0

        CartData.map((item) => (
            i += item.NBR * Data.find((item2) => item2.ID === item.ID).Price
        ))
        return i
    }

    return CartData.length > 0 ? (
        <div className='cart-container'>
            <button className='close-button' onClick={() => navigate('/meal')}>X</button>
            <div className='head'>
                <h1 className='white'>Cart</h1>
                <h3 className='gray'><i className="fa-solid fa-chevron-right"></i></h3>
                <h1 className='gray'>Checkout</h1>
                <h3 className='gray'><i className="fa-solid fa-chevron-right"></i></h3>
                <h1 className='gray'>Order Complete</h1>
            </div>
            <div className='content'>
                <div className='item top'>
                    <h3>Product</h3>
                    <div className='row'>
                        <h3>Price</h3>
                        <h3>Quantity</h3>
                        <h3>Subtotal</h3>
                    </div>
                </div>
                {CartData.map((item, index) => (
                    <div className='item' key={index}>
                        <div className='row'>
                            <img src={process.env.PUBLIC_URL + '/assets/' + Data.find((item2) => item2.ID === item.ID).ID + '.webp'} alt='product' />
                            <h3>{Data.find((item2) => item2.ID === item.ID).Name}</h3>
                        </div>
                        <div className='row'>
                            <h3>{Data.find((item2) => item2.ID === item.ID).Price}</h3>
                            <h3>{item.NBR}</h3>
                            <h3>{(item.NBR * Data.find((item2) => item2.ID === item.ID).Price).toFixed(2)}€</h3>
                        </div>
                    </div>
                ))}
                <div className='item no-border'>
                    <h1>Total</h1>
                    <h1>{(total()).toFixed(2)}€</h1>
                </div>
                <div className='item'>
                    <button className='primary-button' onClick={() => navigate('/meal')}><i className="fa-solid fa-arrow-left"></i>Continue Shopping</button>
                    <button className='primary-button' onClick={() => navigate('/checkout')}>Checkout<i className="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>
        </div>
    )
    :
    (
        <div className='cart-container'>
            <button className='close-button' onClick={() => navigate('/meal')}>X</button>
            <div className='head'>
                <h1 className='white'>Your cart is empty</h1>
            </div>
        </div>
    )
}
