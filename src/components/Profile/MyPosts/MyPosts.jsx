import s from './MyPosts.module.css';
import PostItem from './PostItem/PostItem';

let MyPosts = (props) => {
   let postElements = props.posts.map(
      (post) => <PostItem key={post.id} text={post.text} likes={post.likes} dislikes={post.dislikes} />
   );

   let onSendPostClick = () => {
      props.addPost();
   };

   let onPostChange = (e) => {
      let text = e.target.value;
      props.updateNewPostText(text);
   };

   return (
      <div className={s.posts}>
         <div className={s.posts__title}>My posts</div>
         <div className={s.posts__newpost}>
            <textarea onChange={onPostChange} className={s.posts__textarea} value={props.newPostText} placeholder="Type your post..." />
            <button onClick={onSendPostClick} className={s.posts__send}><span>Send</span></button>
         </div>
         <div className={s.posts__list}>
            {postElements}
         </div>
      </div>
   );
};

export default MyPosts;