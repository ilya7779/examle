import React from 'react';
import message from './Messages.module.css';
import {Outlet} from "react-router-dom";
import MessagesName from "./MessagesName/MessagesName"
import MessagesText from "./MessagesText/MessagesText";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../../Redux/messages-reducer";

const Messages = (props) => {
  let state = props.store.getState().messageData;

  let messageNameElements = props.messageData.messageNameData
    .map( messageName => <MessagesName name={messageName.name} id={messageName.id}/>);

  let messageTextElements = props.messageData.messageTextData
    .map( messageText => <MessagesText text={messageText.text}/>);

  let newMessageBody = props.messageData.newMessageBody;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  }

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body));
  }

  return (
    <div className={message.messages}>
      <div className={message.messages__names}>
        { messageNameElements }
      </div>
      <div className={message.messages__texts}>
        { messageTextElements }
        <textarea className={message.messages__newMessage }
                  value={newMessageBody}
                  onChange={onNewMessageChange}
                  placeholder='Enter your message'></textarea>
        <button className={message.messages__addNewMessage} onClick={ onSendMessageClick }>Submit</button>
      </div>
      <Outlet/>
    </div>
  );
}


export default Messages;