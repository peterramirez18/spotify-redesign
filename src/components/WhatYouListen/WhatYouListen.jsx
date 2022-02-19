import React from 'react';
import './WhatYouListen.scss';

import photo1 from '../../assets/whatyoulisten-photo1.png';
import photo2 from '../../assets/whatyoulisten-photo2.png';
import photo3 from '../../assets/whatyoulisten-photo3.png';
import photo4 from '../../assets/whatyoulisten-photo4.png';
import photo5 from '../../assets/whatyoulisten-photo5.png';



export const WhatYouListen = () => {
  return (
    <div className="whatyoulisten">
        <div className="maintitle">What you listen to the most</div>
        <div className="whatyoulisten__card">
            <img src={photo1} alt="" className="whatyoulisten__card__image1" />
            <img src={photo2} alt="" className="whatyoulisten__card__image2" />
            <img src={photo3} alt="" className="whatyoulisten__card__image3" />
            <img src={photo4} alt="" className="whatyoulisten__card__image4" />
            <img src={photo5} alt="" className="whatyoulisten__card__image5" />
            <p className="whatyoulisten__card__text">Lo-Fi Music</p>
        </div>
    </div>
  )
}
