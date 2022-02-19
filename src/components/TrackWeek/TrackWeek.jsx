import React from 'react'
import './TrackWeek.scss';
import { TrackWeekMusic } from '../TrackWeekMusic/TrackWeekMusic';

import TracksWeekDate from '../../JsonData/tracksweek.json';

export const TrackWeek = () => {
  return (
    <>
      <div className="trackweek">
        <div className="maintitle">Tracks of the week</div>

        <div className="trackweek__card">

          {TracksWeekDate.map(item => 
             <TrackWeekMusic 
                name={item.name}
                owner={item.owner}
                listens={item.listens}
                photo={item.photo}
             />
          )}
         
        </div>
      </div>
    </>
  )
}
