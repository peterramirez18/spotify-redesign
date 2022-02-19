import React from 'react';
import './Playlist.scss';
import { PlaylistCard } from '../PlaylistCard/PlaylistCard';
import playlistDate from '../../JsonData/playlist.json';

import arrow from '../../assets/chevron-right.svg';


export const Playlist = () => {
  return (
    <>
        <div className='playlist'>
            <div className="playlist__title">PlayList For You</div>
            <div className="cards">
            <div className="next">
              <img src={arrow} alt="" />
            </div>
              {playlistDate.map(item => 
                <PlaylistCard 
                  tracks={item.tracks}
                  name={item.name}
                  description={item.description}
                  photo={item.photo}
                  color={item.color}
                />
                )}
            </div>
            
        </div>
    </>
  )
}
