const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

const dialogsReducer = (state, action) => {
   switch (action.type) {
      case SEND_MESSAGE:
         let messageText = state.newMessageText;
         if (messageText !== "" && messageText !== undefined && messageText !== null) {
            state.messages.push({
               owner: "me",
               text: messageText
            });
            state.newMessageText = "";
         }
         return state;
         break;
      case UPDATE_NEW_MESSAGE_TEXT:
         state.newMessageText = action.newMessageText;
         return state;
         break;
      default:
         return state;
         break;
   }
};

export default dialogsReducer;