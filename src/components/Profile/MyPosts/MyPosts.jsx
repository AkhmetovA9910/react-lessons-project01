import s from './MyPosts.module.css';
import PostItem from './PostItem/PostItem';
import React from 'react';

let MyPosts = (props) => {
   let postElements = props.posts.map(
      (post) => <PostItem text={post.text} likes={post.likes} dislikes={post.dislikes} />
   );

   let newPostText = React.createRef();

   let sendPost = () => {
      props.addPost();
   };

   let onPostChange = () => {
      let text = newPostText.current.value;
      props.updateNewPostText(text);
   };

   return (
      <div className={s.posts}>
         <div className={s.posts__title}>My posts</div>
         <div className={s.posts__newpost}>
            <textarea onChange={onPostChange} ref={newPostText} className={s.posts__textarea} value={props.newPostText} />
            <button onClick={sendPost} className={s.posts__send}><span>Send</span></button>
         </div>
         <div className={s.posts__list}>
            {postElements}
         </div>
      </div>
   );
};

export default MyPosts;