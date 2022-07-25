import React from 'react';
import profile from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

  let postsElements = props.posts.map( post => <Post message={post.message} likesCount={post.likesCount} />);

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text)
  }
  return (
    <div className={profile.profile__posts}>
      {/*<img className={profile.posts__photo} src="https://asiamountains.net/upload/slide/slide-1960x857-07.jpg" alt="" />*/}
      <div className={profile.posts__post}>
        { postsElements }
      </div>
      <textarea className={profile.profile__newPost}
                ref={ newPostElement }
                onChange={ onPostChange }
                value={props.newPostText} />
      <button className={profile.profile__addNewPost} onClick={ onAddPost }>Submit</button>
    </div>
  );
}



export default MyPosts;