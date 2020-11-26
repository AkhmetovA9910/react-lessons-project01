import s from './MyPosts.module.css';
import PostItem from './PostItem/PostItem';

let MyPosts = (props) => {
   let postElements = props.state.posts.map(
      (post) => <PostItem text={post.text} likes={post.likes} dislikes={post.dislikes} />
   );

   return (
      <div className={s.posts}>
         <div className={s.posts__title}>My posts</div>
         <div className={s.posts__newpost}>
            <textarea name="newPost" id="newPost" className={s.posts__textarea} placeholder="Type your post..."></textarea>
            <button className={s.posts__send}><span>Send</span></button>
         </div>
         <div className={s.posts__list}>
            {postElements}
         </div>
      </div>
   );
};

export default MyPosts;