import post from './PostOne.module.css';

const PostOne = (props) => {
  return (
    <div className={post.post}>
      <img className={post.post__icon} src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Face-smile.svg/640px-Face-smile.svg.png" alt="" />
      <h2 className={post.post__title}>{props.message}</h2>
      <div className={post.post__likes}>{props.like}</div>
    </div>
  );
}

export default PostOne;