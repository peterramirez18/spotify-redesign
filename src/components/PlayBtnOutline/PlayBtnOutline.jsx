import React, { useState } from 'react';
import './PlayBtnOutline.scss';

import iconPlay from '../../assets/icon-stop-outlline.svg';
import iconStop from '../../assets/icon-play-outlline.svg';

export const PlayBtnOutline = () => {

    const [switchBtn, setSwichBtn] = useState(false);
    const btnSwitch = ()=>{
        switchBtn ? setSwichBtn(false) : setSwichBtn(true);
    }

  return (
    <div className="playbtn">
        <img onClick={btnSwitch} src={switchBtn ? iconPlay : iconStop} alt="icon play" />
    </div>
  )
}
