import React from 'react';
import './PlayerActions.scss';

import iconRepeat from '../../assets/icon-repeat.svg';
import iconAleatori from '../../assets/icon-aleatori.svg';
import iconCollection from '../../assets/icon-collection.svg';



export const PlayerActions = () => {
  return (
    <div className="playeractions">
        <img src={iconRepeat} alt="" />
        <img src={iconAleatori} alt="" />
        <img src={iconCollection} alt="" />
    </div>
  )
}
