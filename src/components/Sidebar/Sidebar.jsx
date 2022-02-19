import React from 'react';
import './Sidebar.scss';

import logoSpotify from '../../assets/spotify-logo.svg';
import iconHome from "../../assets/home.svg";
import iconCompass from "../../assets/compass.svg";
import iconMicrophone from "../../assets/microphone.svg";
import iconCollection from "../../assets/collection.svg";
import iconHeart from "../../assets/heart.svg";

import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const sidebarNavLinks = [iconHome, iconCompass, iconMicrophone, iconCollection, iconHeart];

export const Sidebar = () => {

    return (
        <>
            <div className="sidebar">
                <div className="sidebar__logo">
                    <img src={logoSpotify} alt="" />
                </div>

                <ul className='sidebar__menu'>
                        {sidebarNavLinks.map(sidebarNavLinks =>
                            <li className='sidebar__menu__item'>
                                <img src={`${sidebarNavLinks}`} alt="" />
                            </li>
                        )}
                </ul>
            </div>
        </>
    )
}
