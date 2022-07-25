import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/Preloader";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div>
      <div>
        <img src="https://asiamountains.net/upload/slide/slide-1960x857-07.jpg" alt=""/>
      </div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} alt=""/>
        ava + description
      </div>
    </div>
  )
}

export default ProfileInfo