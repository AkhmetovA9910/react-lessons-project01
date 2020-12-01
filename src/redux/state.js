const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

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
         ]
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

   // addPost() {
   //    let postText = this._state.profilePage.newPostText;
   //    if (postText != "" && postText != undefined && postText != null) {
   //       this._state.profilePage.posts.push({
   //          text: postText,
   //          likes: 0,
   //          dislikes: 0
   //       });
   //       this._callSubscriber();
   //       this._state.profilePage.newPostText = "";
   //    }
   // },
   // updateNewPostText(newText) {
   //    this._state.profilePage.newPostText = newText;
   //    this._callSubscriber();
   // },

   dispatch(action) {
      if (action.type === ADD_POST) {
         let postText = this._state.profilePage.newPostText;
         if (postText !== "" && postText !== undefined && postText !== null) {
            this._state.profilePage.posts.push({
               id: this._state.profilePage.posts[this._state.profilePage.posts.length - 1].id + 1,
               text: postText,
               likes: 0,
               dislikes: 0
            });
            console.log(this._state.profilePage.posts[this._state.profilePage.posts.length - 1].id);
            this._callSubscriber();
            this._state.profilePage.newPostText = "";
         }
      }
      else if (action.type === UPDATE_NEW_POST_TEXT) {
         this._state.profilePage.newPostText = action.newText;
         this._callSubscriber();
      }
   },
   subscribe(observer) {
      this._callSubscriber = observer;
   }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

window.store = store;

export default store;