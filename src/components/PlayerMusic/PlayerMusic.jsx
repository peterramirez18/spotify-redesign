import React from 'react';
import './PlayerMusic.scss';

import iconHeadPhones from '../../assets/icon-headphones.svg';
import iconLike from '../../assets/icon-like.svg';
import iconPlay from '../../assets/icon-play2.svg';
import { LikeBtn } from '../LikeBtn/LikeBtn';


const PlayerMusic = (props) => {
    return (
        <div className='trackweekmusic'>
            <div>
                <img className='trackweekmusic__photo' src={props.photo} alt="" />
                <div>
                    <p>{props.name}</p>
                    <p className='trackweekmusic__owner'>{props.owner}</p>
                </div>
            </div>
            <div>
                <LikeBtn />
            </div>
        </div>
    )
}

export default PlayerMusic