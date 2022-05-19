import message from './Messages.module.css';
import {NavLink, Outlet, Routes} from "react-router-dom";

const MessagesName = (props) => {
  return (
    <div className={message.messages__name}>
      <NavLink to={props.id}>{props.name}</NavLink>
    </div>
  )
}
const MessagesText = (props) => {
  return (
    <div className={message.messages__text}>{props.text}</div>
  )
}

const Messages = (props) => {
  return (

    <div className={message.messages}>
      <div className={message.messages__names}>
        <MessagesName name="Ilya" id="1"/>
        <MessagesName name="Anna" id="2"/>
        <MessagesName name="Vladislav" id="3"/>
      </div>
      <div className={message.messages__texts}>
        <MessagesText text="It's me"/>
        <MessagesText text="Hello"/>
        <MessagesText text="Yo"/>
      </div>
      <Outlet/>
    </div>

  );
}


export default Messages;