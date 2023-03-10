import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Hero() {

    const navigate = useNavigate();

    const goMeal = () => {
        navigate('/meal')
    }

    return (
        <div className='hover-container'>
            <video autoPlay loop muted playsInline>
                <source src={process.env.PUBLIC_URL + '/assets/video.mov'} type='video/mp4' />
            </video>
            <h1 className='title'>Sushi Bar</h1>
            <button className='primary-button big' onClick={goMeal}>Commander en ligne</button>
            <div className='services-container'>
                <div className='column'>
                    <i className="fa-regular fa-star"></i>
                    <h2>Vous nous faites confiance</h2>
                </div>
                <div className='column'>
                    <i className="fa-solid fa-truck"></i>
                    <h2>Livraison offerte</h2>
                </div>
                <div className='column'>
                    <i className="fa-regular fa-credit-card"></i>
                    <h2>Paiement 100% sécurisé</h2>
                </div>
                <div className='column'>
                    <i className="fa-solid fa-user-tie"></i>
                    <h2>Service Client 7j/7</h2>
                </div>
            </div>
        </div>
    )
}
