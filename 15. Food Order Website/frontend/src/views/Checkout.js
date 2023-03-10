import React from 'react'

export default function Checkout() {

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
                    <p>Country</p>
                    <select>
                        <option>France</option>
                        <option>Belgium</option>
                        <option>United Kingdom</option>
                    </select>
                    <p>Street address</p>
                    <input type='text'/>
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

                </div>
            </div>
        </div>
    )
}
