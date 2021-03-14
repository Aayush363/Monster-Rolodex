import React from 'react';
import './card.styles.css'

export const Card = props =>(
    <div className = 'card-container'>
        <img alt = 'monster' src = {`https://robohash.org/${props.monster.id}1?set=set2&size=180x180`} />
        <h2><center>{props.monster.name}</center></h2>
        <p><center>{props.monster.email}</center></p>
    </div>
)