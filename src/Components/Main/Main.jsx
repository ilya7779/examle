import main from './Main.module.css';
import Sidebar from './Sidebar/Sidebar';
import Content from './Content/Content';

const Main = (props) => {

  return (
    <main className={main.main}>
      <Sidebar />
      <Content profileData={props.state.content.profile} messageData={props.state.content.messages}/>
    </main>
  );
}


export default Main;