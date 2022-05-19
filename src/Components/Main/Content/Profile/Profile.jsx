import profile from './Profile.module.css';
import PostOne from './Posts/PostOne';

const Profile = () => {
  return (
    <div className={profile.profile__posts}>
      <img className={profile.posts__photo} src="https://asiamountains.net/upload/slide/slide-1960x857-07.jpg" alt="" />
      <div className={profile.posts__post}>
        <PostOne message="Мой пост1" like="11 likes"/>   
        <PostOne message="Мой пост2" like="21 likes"/>   
        <PostOne message="Мой пост3" like="31 likes"/>   
        <PostOne message="Мой пост4" like="41 likes"/>   
      </div>
    </div>
  );
}

  

export default Profile;