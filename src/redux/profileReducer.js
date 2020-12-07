const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
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
};

const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_POST:
         let postText = state.newPostText;
         if (postText !== "" && postText !== undefined && postText !== null) {
            return {
               ...state,
               posts: [
                  ...state.posts,
                  {
                     id: state.posts[state.posts.length - 1].id + 1,
                     text: postText,
                     likes: 0,
                     dislikes: 0
                  }
               ],
               newPostText: ""
            };
         }
         return state;

      case UPDATE_NEW_POST_TEXT: {
         return {
            ...state,
            newPostText: action.newText
         };
      }

      default:
         return state;
   }
};

export default profileReducer;