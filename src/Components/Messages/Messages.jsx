import React from 'react';
import message from './Messages.module.css';
import {Outlet} from "react-router-dom";
import MessagesName from "./MessagesName/MessagesName"
import MessagesText from "./MessagesText/MessagesText";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/messages-reducer";

const Messages = (props) => {
  let state = props.messageData;

  let messageNameElements = state.messageNameData
    .map( messageName => <MessagesName name={messageName.name} key={messageName.id} id={messageName.id}/>);

  let messageTextElements = state.messageTextData
    .map( messageText => <MessagesText text={messageText.text} key={messageText.id}/>);

  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  }

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
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