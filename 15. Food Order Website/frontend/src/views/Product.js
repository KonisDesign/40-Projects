import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Data } from '../data/data'

export default function Product() {

    const navigate = useNavigate();

    const { id } = useParams();

  return (
    <div className='product-container'>
        <button className='close-button' onClick={() => navigate('/meal')}>X</button>
        <div className='top-container'>
            <div className='column'>
                <h3>{Data[id].Cat}</h3>
                <h1>{Data[id].Name}</h1>
            </div>
            <button className='primary-button'>Add to cart</button>
        </div>
        <div className='infos'>
            <img src={process.env.PUBLIC_URL + "/assets/" + id + ".webp"} alt='product'/>
            <div className='column'>
                <div className='row'>
                    <h2>{Data[id].Price}€</h2>
                    <p>{Data[id].Piece} {Data[id].Piece === "1" ? "PIÈCE" : "PIÈCES"}</p>
                </div>
                <div className='column'>
                    <h4>Composition</h4>
                    {Data[id].Compo.map((item, index) => (
                        <p>{item}</p>
                    ))}
                </div>
                <p>{Data[id].Description}</p>
            </div>
        </div>
    </div>
  )
}
