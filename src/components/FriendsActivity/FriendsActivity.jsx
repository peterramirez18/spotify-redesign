import React from 'react';
import './FriendsActivity.scss';

import FriendsData from '../../JsonData/myfriends.json';
import { FriendsMode } from '../FriendsMode/FriendsMode';

export const FriendsActivity = () => {
  return (
    <>
      <div className="friendsactivity">
        <div className="maintitle">Friends Activity</div>

        <div className="friendsactivity__container">
          <div className="maintitle">My Friends</div>
          {FriendsData.map(item => 
              <FriendsMode 
                photo={item.photo}
                name={item.name}
                mode={item.mode}
                music={item.music}
              />
          )}
        </div>
      </div>
    </>
  )
}
