import content from './Content.module.css';
import Messages from './Messages/Messages';
import Profile from './Profile/Profile';
import {Route, Routes} from 'react-router-dom';
// import {updateNewPostText} from "../../../Redux/store";

const Content = (props) => {
  return (
    <section className={content.content}>
      <Routes>
        <Route path='profile' element={<Profile newPost={props.profileData.newPostText}
                                                posts={props.profileData.posts}
                                                dispatch={props.dispatch} />} />
        <Route path='messages' element={<Messages messageData={props.messageData} store={props.store}/>}>
          <Route index element={<div>Choose a message</div>}/>
          <Route path=':id' element={<div>message</div>}/>
        </Route>
        {/*<Route path='news' element={<News/>}/>*/}
        {/*<Route path='music' element={<Music/>}/>*/}
        {/*<Route path='settings' element={<Settings/>}/>*/}
      </Routes>
    </section>
  );
}


export default Content;