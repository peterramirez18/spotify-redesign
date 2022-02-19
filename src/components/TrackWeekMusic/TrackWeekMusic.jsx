import React from 'react';
import './TrackWeekMusic.scss';

import iconHeadPhones from '../../assets/icon-headphones.svg';
import { PlayBtnOutline } from '../PlayBtnOutline/PlayBtnOutline';
import { LikeBtn } from '../LikeBtn/LikeBtn';



export const TrackWeekMusic = (props) => {
  return (
    <div className='trackweekmusic'>
      <div>
        <img className='trackweekmusic__photo' src={props.photo} alt="" />
        <div>
          <p>{props.name}</p>
          <p className='trackweekmusic__owner'>{props.owner}</p>
        </div>
      </div>
      <div>
        <div className="trackweekmusic__listens">
          <img src={iconHeadPhones} alt="" />
          <p>{props.listens}k</p>
        </div>
        <div className="trackweekmusic__actions">
          <LikeBtn />
          <PlayBtnOutline />
        </div>
      </div>
    </div>
  )
}
