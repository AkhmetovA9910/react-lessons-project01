const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
   dialogs: [
      {
         id: 1,
         img: '/../src/img/profile-pictures/avatar01.jpeg',
         name: "Kevin",
         message: "It's alright. I think he did'not make it on purpose. You really shoud tlk to him"
      },
      {
         id: 2,
         img: '/../src/img/profile-pictures/avatar02.jpg',
         name: "Dirk",
         message: "Hey maaaan! Have a nice time))"
      },
      {
         id: 3,
         img: '/../src/img/profile-pictures/avatar03.jpg',
         name: "Diana",
         message: "What's with that thing you've talked me about?"
      }
   ],
   messages: [
      {
         id: 1,
         owner: "me",
         text: "Yep. What about you? Is it alright?"
      },
      {
         id: 2,
         owner: "they",
         text: "It's alright. I think he did'not make it on purpose. You really shoud tlk to him"
      }
   ],
   newMessageText: ""
};

const dialogsReducer = (state = initialState, action) => {
   switch (action.type) {
      case SEND_MESSAGE:
         let messageText = state.newMessageText;
         if (messageText !== "" && messageText !== undefined && messageText !== null) {
            return {
               ...state,
               messages: [
                  ...state.messages,
                  {
                     id: state.messages[state.messages.length - 1].id + 1,
                     owner: "me",
                     text: messageText
                  }
               ],
               newMessageText: ""
            };
         }
         return state;

      case UPDATE_NEW_MESSAGE_TEXT: {
         return {
            ...state,
            newMessageText: action.newMessageText
         };
      }
      default:
         return state;
   }
};

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageTextActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: text });

export default dialogsReducer;