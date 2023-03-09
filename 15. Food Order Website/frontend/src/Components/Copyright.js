import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Copyright() {

    const navigate = useNavigate()

  return (
    <div className='copyright'>
        <button onClick={() => navigate('/')}><img src={process.env.PUBLIC_URL + '/assets/logo.png'} alt='logo'/></button>
        <div className='row'>
            <a href='http://google.com' target='_blank' rel='noreferrer'><img src={process.env.PUBLIC_URL + "/assets/google-play.png"} alt='google'/></a>
            <a href='http://apple.com' target='_blank' rel='noreferrer'><img src={process.env.PUBLIC_URL + "/assets/apple-store.png"} alt='apple'/></a>
        </div>
    </div>
  )
}
