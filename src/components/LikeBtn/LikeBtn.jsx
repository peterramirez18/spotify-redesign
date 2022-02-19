import React, { useState } from 'react';
import './LikeBtn.scss';

import iconPlay from '../../assets/icon-like.svg';
import iconStop from '../../assets/icon-onlike.svg';

export const LikeBtn = () => {

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
