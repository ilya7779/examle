import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import {BrowserRouter} from "react-router-dom";


function App(props) {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header/>
        <Main state={props.state.main}
              dispatch={props.dispatch}
              store={props.store} />
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
