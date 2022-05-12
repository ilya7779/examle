import content from './Content.module.css';
import PostOne from './Posts/PostOne';

const Content = () => {
  return (
    <section className={content.content}>
      <div className={content.content__posts}>
        <img className={content.posts__photo} src="https://asiamountains.net/upload/slide/slide-1960x857-07.jpg" alt="" />
        <div className={content.posts__post}>
          <PostOne message="Мой пост1" like="11 likes"/>   
          <PostOne message="Мой пост2" like="21 likes"/>   
          <PostOne message="Мой пост3" like="31 likes"/>   
          <PostOne message="Мой пост4" like="41 likes"/>   
        </div>
      </div>
    </section>
  );
}


export default Content;