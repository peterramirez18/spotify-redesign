import React from 'react';
import './Header.scss';

import iconSearch from '../../assets/icon-search.svg';
import iconFilter from '../../assets/icon-filter.svg';

import iconBell from '../../assets/bell.svg';
import iconCog from '../../assets/cog.svg';
import iconFlag from '../../assets/flag.svg';
import iconBadgeCheck from '../../assets/badge-check.svg';

import profilePhoto from '../../assets/profile-photo.png';



export const Header = () => {
  return (
    <div className="header">
      <div className="header__searchbar">
        <img src={iconSearch} alt="" />
        <input type="text" placeholder='Search...' />
        <img src={iconFilter} alt="" />
        <p>Filters</p>
      </div>
      <div className="header__profile">
        <img src={iconBadgeCheck} alt="" />
        <img src={iconFlag} alt="" />
        <img src={iconCog} alt="" />
        <img src={iconBell} alt="" />
        <img src={profilePhoto} alt="" />
      </div>
    </div>
  )
}
