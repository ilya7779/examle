import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/messages-reducer";
import Messages from "./Messages";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
  return {
    messageData: state.messages
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    },
    sendMessage: () => {
      dispatch(sendMessageCreator());
    }
  }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;