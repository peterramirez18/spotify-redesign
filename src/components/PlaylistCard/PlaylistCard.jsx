import React from 'react';
import { PlayBtn } from '../PlayBtn/PlayBtn';
import './PlaylistCard.scss';



export const PlaylistCard = (props) => {

  return (
    <div className="card">
       
        <div className="card__info" 
        
        style={{background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 50.12%, rgba(253, 156, 2, 0) 50.12%, ${props.color} 100%)`}}>
          
          <p>{props.tracks} Tracks</p>
          <div className="card__info__footer">
            <PlayBtn />
            <div>
              <p>{props.name}</p>
              <p>{props.description}</p>
            </div>
          </div>
        </div>
        <img src={props.photo} alt="" />
    </div>
  )
}
