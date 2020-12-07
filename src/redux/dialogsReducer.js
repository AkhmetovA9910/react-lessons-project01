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
         owner: "me",
         text: "Yep. What about you? Is it alright?"
      },
      {
         owner: "they",
         text: "It's alright. I think he did'not make it on purpose. You really shoud tlk to him"
      }
   ],
   newMessageText: ""
};

const dialogsReducer = (state = initialState, action) => {
   switch (action.type) {
      case SEND_MESSAGE: {
         let stateCopy = { ...state };
         stateCopy.messages = [...state.messages];
         let messageText = stateCopy.newMessageText;
         if (messageText !== "" && messageText !== undefined && messageText !== null) {
            stateCopy.messages.push({
               owner: "me",
               text: messageText
            });
            stateCopy.newMessageText = "";
         }
         return stateCopy;
      }
      case UPDATE_NEW_MESSAGE_TEXT: {
         let stateCopy = { ...state };
         stateCopy.newMessageText = action.newMessageText;
         return stateCopy;
      }
      default:
         return state;
   }
};

export default dialogsReducer;