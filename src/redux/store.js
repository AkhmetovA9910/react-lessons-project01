import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let store = {
   _state: {
      dialogsPage: {
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
      },
      profilePage: {
         posts: [
            {
               id: 0,
               text: "My first post ever!!!",
               likes: 10,
               dislikes: 3
            },
            {
               id: 1,
               text: "Subscribe me!",
               likes: 11,
               dislikes: 2
            },
            {
               id: 2,
               text: "Hello everyone))!",
               likes: 5,
               dislikes: 0
            },
            {
               id: 3,
               text: "Happy birthday to ME!;)",
               likes: 29,
               dislikes: 1
            },
         ],
         newPostText: ""
      }
   },
   _callSubscriber() { },

   getState() {
      return this._state;
   },

   dispatch(action) {
      this._state.profilePage = profileReducer(this._state.profilePage, action);
      this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

      this._callSubscriber();
   },
   subscribe(observer) {
      this._callSubscriber = observer;
   }
};

export default store;