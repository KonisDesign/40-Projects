import React from 'react'

export default function SortItems(props) {

  return (
    <div className='sort-container'>
        <button autoFocus onClick={() => props.sortFunc("all")}>All</button>
        <button onClick={() => props.sortFunc("Sushi Boxes")}>Sushi Boxes</button>
        <button onClick={() => props.sortFunc("Sushi")}>Sushi</button>
        <button onClick={() => props.sortFunc("Maki")}>Maki</button>
    </div>
  )
}
