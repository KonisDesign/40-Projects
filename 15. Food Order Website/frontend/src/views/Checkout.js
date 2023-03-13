import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CartData } from '../data/CartData'
import { Data } from '../data/Data'
import './Style.css'

export default function Checkout() {

    const navigate = useNavigate();

    const total = () => {

        let i = 0

        CartData.map((item) => (
            i += item.NBR * Data.find((item2) => item2.ID === item.ID).Price
        ))

        i += 3.50

        return i
    }

    return (
        <div className='cart-container'>
            <div className='head'>
                <h1 className='white'>Cart</h1>
                <h3 className='white'><i className="fa-solid fa-chevron-right"></i></h3>
                <h1 className='white'>Checkout</h1>
                <h3 className='gray'><i className="fa-solid fa-chevron-right"></i></h3>
                <h1 className='gray'>Order Complete</h1>
            </div>
            <div className='checkout'>
                <div className='contact-infos'>
                    <h1>Billing details</h1>
                    <div className='row'>
                        <p>First name</p>
                        <p>Last name</p>
                    </div>
                    <div className='row'>
                        <input type='text'/>
                        <input type='text'/>
                    </div>
                    <p>Company name (optional)</p>
                    <input type='text'/>
                    <p>Street address</p>
                    <input type='text'/>
                    <p>More infos</p>
                    <input type='text'/>
                    <p>Town / City</p>
                    <input type='text'/>
                    <p>Postcode</p>
                    <input type='text'/>
                    <p>Phone</p>
                    <input type='text'/>
                    <p>Email</p>
                    <input type='text'/>
                    <p>Order notes</p>
                    <textarea rows='6'/>
                </div>
                <div className='bill'>
                    <h1>Your order</h1>
                    <div className='row'>
                        <h3>Product</h3>
                        <h3>Subtotal</h3>
                    </div>
                    {CartData.map((item, index) => (
                        <div className='row' key={index}>
                            <p>{Data.find((item2) => item2.ID === item.ID).Name} x {item.NBR}</p>
                            <p>{(item.NBR * Data.find((item2) => item2.ID === item.ID).Price).toFixed(2)}€</p>
                        </div>
                    ))}
                    <div className='row'>
                        <h3>Shipping</h3>
                        <p>3.50€</p>
                    </div>
                    <div className='row'>
                        <h3>Total</h3>
                        <h3>{(total()).toFixed(2)}€</h3>
                    </div>
                    <button className='primary-button' onClick={() => navigate('/complete')}>Place order</button>
                </div>
            </div>
        </div>
    )
}
