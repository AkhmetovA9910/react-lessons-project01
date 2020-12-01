const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const profileReducer = (state, action) => {
   if (action.type === ADD_POST) {
      let postText = state.newPostText;
      if (postText !== "" && postText !== undefined && postText !== null) {
         state.posts.push({
            id: state.posts[state.posts.length - 1].id + 1,
            text: postText,
            likes: 0,
            dislikes: 0
         });
         state.newPostText = "";
      }
   }
   else if (action.type === UPDATE_NEW_POST_TEXT) {
      state.newPostText = action.newText;
   }

   return state;
};

export default profileReducer;