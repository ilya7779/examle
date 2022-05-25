import message from './Messages.module.css';
import {Outlet} from "react-router-dom";
import MessagesName from "./MessagesName/MessagesName"
import MessagesText from "./MessagesText/MessagesText";

const Messages = (props) => {

  let messageNameElements = props.messageData.messageNameData
    .map( messageName => <MessagesName name={messageName.name} id={messageName.id}/>);

  let messageTextElements = props.messageData.messageTextData
    .map( messageText => <MessagesText text={messageText.text}/>);

  return (
    <div className={message.messages}>
      <div className={message.messages__names}>
        { messageNameElements }
      </div>
      <div className={message.messages__texts}>
        { messageTextElements }
      </div>
      <Outlet/>
    </div>
  );
}


export default Messages;