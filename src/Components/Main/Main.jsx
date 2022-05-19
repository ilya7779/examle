import main from './Main.module.css';
import Sidebar from './Sidebar/Sidebar';
import Content from './Content/Content';

const Main = () => {
  return (
    <main className={main.main}>
      <Sidebar />
      <Content />
    </main>
  );
}


export default Main;