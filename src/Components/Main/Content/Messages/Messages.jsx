import React from 'react';
import message from './Messages.module.css';
import {Outlet} from "react-router-dom";
import MessagesName from "./MessagesName/MessagesName"
import MessagesText from "./MessagesText/MessagesText";

const Messages = (props) => {

  let messageNameElements = props.messageData.messageNameData
    .map( messageName => <MessagesName name={messageName.name} id={messageName.id}/>);

  let messageTextElements = props.messageData.messageTextData
    .map( messageText => <MessagesText text={messageText.text}/>);

  let newMessageElement = React.createRef();

  let addNewMessage = () => { (
      alert (newMessageElement.current.value)
    )
  }

  return (
    <div className={message.messages}>
      <div className={message.messages__names}>
        { messageNameElements }
      </div>
      <div className={message.messages__texts}>
        { messageTextElements }
        <textarea className={message.messages__newMessage } ref={ newMessageElement } ></textarea>
        <button className={message.messages__addNewMessage} onClick={ addNewMessage }>Submit</button>
      </div>
      <Outlet/>
    </div>
  );
}


export default Messages;