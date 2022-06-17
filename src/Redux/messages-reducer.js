const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
  messageNameData: [
    {id: '1', name: "Ilya"},
    {id: '2', name: "Anna"},
    {id: '3', name: "Vladislav"},
  ],
  messageTextData: [
    {id: 1, text: "It's me"},
    {id: 2, text: "Hello"},
    {id: 3, text: "Yo"},
  ],
  newMessageBody: ""
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = '';
      state.messageTextData.push({id: 4, text: body});
      return state;
    default:
      return state;
  }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
  ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default messagesReducer;