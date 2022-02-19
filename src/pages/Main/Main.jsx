import React from 'react';
import './Main.scss';

import { Header } from '../../components/Header/Header';
import { Playlist } from '../../components/Playlist/Playlist';
import { WhatYouListen } from '../../components/WhatYouListen/WhatYouListen';
import { TrackWeek } from '../../components/TrackWeek/TrackWeek';
import { FriendsActivity } from '../../components/FriendsActivity/FriendsActivity';
import { Player } from '../../components/Player/Player';

export const Main = () => {
  return (
    <div className="main">
      <Header />
      <Playlist />
      
      <div className="mainlayout">
        <WhatYouListen />
        <TrackWeek />
        <FriendsActivity />
      </div>

      <Player/>
    </div>
  )
}
