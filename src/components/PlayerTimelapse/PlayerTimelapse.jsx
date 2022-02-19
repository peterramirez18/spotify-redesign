import React from 'react';
import './PlayerTimelapse.scss';

import iconBack from '../../assets/icon-skip-back.svg';
import iconStop from '../../assets/icon-stop.svg';
import iconNext from '../../assets/icon-skip-next.svg';
import iconVolume from '../../assets/icon-volume-up.svg';
import { PlayBtn } from '../PlayBtn/PlayBtn';


export const PlayerTimelapse = () => {
  return (
    <div className="playertimelapse">
        <div className="playertimelapse__actions">
            <img src={iconBack} alt="" />
                <PlayBtn />
            <img src={iconNext} alt="" />
        </div>

        <div className="playertimelapse__time">
            <p>1:50</p>
            <div className="playertimelapse__time__line">
                <div className="playertimelapse__time__line--played"></div>
            </div>
            
            <p>3:00</p>
        </div>

        <div className="playertimelapse__volume">
            <img src={iconVolume} alt="" />
            <div className="playertimelapse__volume__line">
                <div className="playertimelapse__volume__line--played"></div>
            </div>  
        </div>
    </div>
  )
}
