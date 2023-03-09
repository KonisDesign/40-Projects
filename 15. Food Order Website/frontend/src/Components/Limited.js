import React from 'react'

export default function Limited() {
    return (
        <div className='limited-container'>
            <h2>Sushi Bar</h2>
            <h2>X</h2>
            <h1>Kei Kobayashi</h1>
            <p>Kei Kobayashi dévoile dans cette box en édition limitée, un voyage à la croisée des cultures. Sa cuisine audacieuse, plurielle et délicate se déploie au travers de recettes créatives et uniques qui vous feront voyager entre différents continents.</p>
            <div className='infos'>
                <div className='compo'>
                    <h3>Compositions</h3>
                    <p>1 AZUKI & SALMON GUNKAN</p>
                    <p>2 WEST AFRICA SUSHI</p>
                    <p>6 CAJUN ROLL</p>
                    <p>3 DENGAKU ROLL</p>
                    <p>3 SWEET POTATOES AND CHEESE SPRING</p>
                    <p>6 COCO LEMON SPRING</p>
                    <div className='row'>
                        <p className='price'>26</p>
                        <p className='small-price'>90</p>
                    </div>
                    <h3 className='nbr'>21 Pièces</h3>
                    <button className='secondary-button'>Je commande</button>
                </div>
                <img src={process.env.PUBLIC_URL + "/assets/box.png"} alt='compo' />
            </div>
        </div>
    )
}
