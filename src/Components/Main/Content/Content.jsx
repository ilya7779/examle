import content from './Content.module.css';
import Messages from './Messages/Messages';
import Profile from './Profile/Profile';
import {Route, Routes} from 'react-router-dom';

const Content = (props) => {
  return (
    <section className={content.content}>
      <Routes>
        <Route path='profile' element={<Profile posts={props.profileData.posts} />} />
        <Route path='messages' element={<Messages messageData={props.messageData}/>}>
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