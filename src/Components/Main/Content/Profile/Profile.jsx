import React from 'react';
import profile from './Profile.module.css';
import PostOne from './Posts/PostOne';

const Profile = (props) => {
  let postsElements = props.posts.map( post => <PostOne message={post.message} likesCount={post.likesCount} />);

  let newPostElement = React.createRef();

  let addNewPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
  };

  return (
    <div className={profile.profile__posts}>
      <img className={profile.posts__photo} src="https://asiamountains.net/upload/slide/slide-1960x857-07.jpg" alt="" />
      <div className={profile.posts__post}>
        { postsElements }
      </div>
      <textarea className={profile.profile__newPost} ref={ newPostElement }></textarea>
      <button className={profile.profile__addNewPost} onClick={ addNewPost }>Submit</button>
    </div>
  );
}



export default Profile;