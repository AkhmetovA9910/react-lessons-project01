import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/store';
import MyPosts from './MyPosts';

let MyPostsContainer = (props) => {
   let state = props.store.getState();

   let addPost = () => {
      let action = addPostActionCreator();
      props.dispatch(action);
   };

   let updateNewPostText = (text) => {
      let action = updateNewPostTextActionCreator(text);
      props.dispatch(action);
   };

   return (
      <MyPosts
         posts={state.profilePage.posts}
         updateNewPostText={updateNewPostText}
         addPost={addPost}
         newPostText={state.profilePage.newPostText}
      />
   );
};

export default MyPostsContainer;