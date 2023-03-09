import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Data } from '../data/data'
import SortItems from './SortItems'

export default function Items() {

  const navigate = useNavigate();

  const [cat, setCat] = useState("all")

  const sortFunc = (getCat) => {
    const newCat = getCat
    setCat(newCat)
  }

  return cat === "all" ? (
    <>
      <SortItems sortFunc={sortFunc} />
      <div className='meal-container'>
        {Data.map((item, index) => (
          <div className='item' key={index} onClick={() => navigate('/meal/' + index)}>
            <img src={process.env.PUBLIC_URL + '/assets/' + item.ID + '.webp'} alt={item.ID} />
            <h2>{item.Name}</h2>
            <div className='row'>
              <h3>{item.Price}€</h3>
              <p>{item.Piece} pieces</p>
            </div>
            <button className='primary-button'>Add to cart</button>
          </div>
        ))}
      </div>
    </>
  )
    :
    (
      <>
        <SortItems sortFunc={sortFunc} />
        <div className='meal-container'>
          {Data.map((item, index) => (item.Cat === cat ?
            <div className='item' key={index} onClick={() => navigate('/meal/' + index)}>
              <img src={process.env.PUBLIC_URL + '/assets/' + item.ID + '.webp'} alt={item.ID} />
              <h2>{item.Name}</h2>
              <div className='row'>
                <h3>{item.Price}€</h3>
                <p>{item.Piece} pieces</p>
              </div>
              <button className='primary-button'>Add to cart</button>
            </div>
            : null))}
        </div>
      </>
    )
}
