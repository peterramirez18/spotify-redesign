import React from 'react';
import PlayerMusic from '../PlayerMusic/PlayerMusic';
import './Player.scss';

import TrackMusicDate from '../../JsonData/playermusic.json';
import { PlayerTimelapse } from '../PlayerTimelapse/PlayerTimelapse';
import { PlayerActions } from '../PlayerActions/PlayerActions';

export const Player = () => {
  return (
    <div className="player">
        {TrackMusicDate.map (item => 
            <PlayerMusic 
                photo={item.photo}
                name={item.name}
                owner={item.owner}
            />
        )}

        <div>
            <PlayerTimelapse />
        </div>

        <PlayerActions />
        
    </div>
  )
}
