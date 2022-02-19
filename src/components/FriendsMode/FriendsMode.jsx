import React from 'react';
import './FriendsMode.scss';

export const FriendsMode = (props) => {
  return (
    <>
        <div className="friendsmode">
            <div className="friendsmode__photo">
                <img src={props.photo} alt="" />
            </div>

            <div className="friendsmode__info">
                <p>{props.name}</p>
                <div className="friendsmode__info__mode">
                    <div className={`friendsmode__${props.mode}`}></div>
                    <p>{props.mode} {props.music}</p>
                </div>
            </div>
        </div>
    </>

  )
}
