import profile from './Profile.module.css';
import PostOne from './Posts/PostOne';

const Profile = (props) => {


  let postsElements = props.posts.map( post => <PostOne message={post.message} likesCount={post.likesCount} />);

  return (
    <div className={profile.profile__posts}>
      <img className={profile.posts__photo} src="https://asiamountains.net/upload/slide/slide-1960x857-07.jpg" alt="" />
      <div className={profile.posts__post}>
        { postsElements }
      </div>
    </div>
  );
}



export default Profile;