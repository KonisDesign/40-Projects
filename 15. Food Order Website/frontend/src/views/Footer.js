import React from 'react'
import Copyright from '../Components/Copyright'

export default function Footer() {

    return (
        <>
            <footer>
                <div className='column'>
                    <h1>Sushi Bar</h1>
                    <p>Dolor church-key veniam, fap Bushwick mumblecore irure Vice consectetur 3 wolf moon sapiente literally quinoa.</p>
                    <div className='row'>
                        <a href='http://facebook.com' target='_blank' rel='noreferrer'><i className="fa-brands fa-facebook"></i></a>
                        <a href='http://twitter.com' target='_blank' rel='noreferrer'><i className="fa-brands fa-twitter"></i></a>
                        <a href='http://instagram.com' target='_blank' rel='noreferrer'><i className="fa-brands fa-instagram"></i></a>
                        <a href='http://linkedin.com' target='_blank' rel='noreferrer'><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                </div>
                <div className='column'>
                    <h3>Links</h3>
                    <a href='/'>Home</a>
                    <a href='/meal'>Meal</a>
                </div>
                <div className='column'>
                    <h3>More</h3>
                    <a href='/'>Become a franchisee !</a>
                    <a href='/'>Recruitment</a>
                </div>
                <div className='column'>
                    <h3>Contact infos</h3>
                    <p>+65.4566743</p>
                    <p>contact@sushibar.com</p>
                    <p>732/21 Second Street, Manchester, King Street, Kingston United Kingdom</p>
                </div>
            </footer>
            <Copyright />
        </>
    )
}
