import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../views/Style.css'

export default function Header() {

    const navigate = useNavigate();

    const goHome = () => {
        navigate('/')
    }

    const goMeal = () => {
        navigate('/meal')
    }
  
    return (
    <header>
        <div className='row'>
            <button onClick={goHome}><img src={process.env.PUBLIC_URL + '/assets/logo.png'} alt='logo'/></button>
            <button className='bronze' onClick={goMeal}>MEAL</button>
        </div>
        <div className='row'>
            <button onClick={() => navigate('/cart')}><i className="fa-solid fa-bag-shopping bronze"></i> Cart</button>
            {/* <button><i className="fa-solid fa-bars white"></i></button> */}
        </div>
    </header>
  )
}
