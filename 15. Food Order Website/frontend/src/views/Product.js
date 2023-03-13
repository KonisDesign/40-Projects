import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Data } from '../data/Data'
import { CartData } from '../data/CartData'

export default function Product() {

    const navigate = useNavigate();

    const { id } = useParams();

    const addToCart = (id) => {
        const exist = CartData.find((item) => item.ID === id);
        if (exist) {
          exist.NBR += 1;
        } else {
          CartData.push({
            ID: id,
            NBR: 1,
          });
        }
      
        document.getElementById('notif').style.display = "block"
      };

  return (
    <div className='product-container'>
      <div className='notification' id='notif'>
        <h3><b>{Data[id].Name}</b> added <i className="fa-solid fa-bag-shopping"></i></h3>
      </div>
        <button className='close-button' onClick={() => navigate('/meal')}>X</button>
        <div className='top-container'>
            <div className='column'>
                <h3>{Data[id].Cat}</h3>
                <h1>{Data[id].Name}</h1>
            </div>
            <button className='primary-button' onClick={() => addToCart(id)}>Add to cart</button>
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
                        <p key={index}>{item}</p>
                    ))}
                </div>
                <p>{Data[id].Description}</p>
            </div>
        </div>
    </div>
  )
}
