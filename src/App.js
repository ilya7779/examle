import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import MessagesContainer from "./Components/Messages/MessagesContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";



function App(props) {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header/>
        <Sidebar/>
        <div className="content">
          <Routes>
            <Route path='profile/:userId' element={<ProfileContainer/>}/>
            <Route path='messages' element={<MessagesContainer/>}>
              <Route index element={<div>Choose a message</div>}/>
              <Route path=':id' element={<div>message</div>}/>
            </Route>
            <Route path='users' element={<UsersContainer />} />
          </Routes>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
);
}

export default App;
