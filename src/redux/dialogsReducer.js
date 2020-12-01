const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

const dialogsReducer = (state, action) => {
   if (action.type === SEND_MESSAGE) {
      let messageText = state.newMessageText;
      if (messageText !== "" && messageText !== undefined && messageText !== null) {
         state.messages.push({
            owner: "me",
            text: messageText
         });
         state.newMessageText = "";
      }
   }
   else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      state.newMessageText = action.newMessageText;
   }

   return state;
};

export default dialogsReducer;