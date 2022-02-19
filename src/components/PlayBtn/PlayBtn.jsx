import React, { useState } from 'react';
import './PlayBtn.scss';

import iconPlay from '../../assets/icon-play.svg';
import iconStop from '../../assets/icon-stop.svg';

export const PlayBtn = () => {

    const [switchBtn, setSwichBtn] = useState(false);
    const btnSwitch = ()=>{
        switchBtn ? setSwichBtn(false) : setSwichBtn(true);
    }

  return (
    <div className="playbtn">
        <img onClick={btnSwitch} src={switchBtn ? iconStop : iconPlay} alt="icon play" />
    </div>
  )
}
