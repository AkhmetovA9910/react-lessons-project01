import s from './PostItem.module.css';
import like from './../../../../img/like.svg';

let PostItem = (props) => {

   return (
      <div className={s.post}>
         <div className={s.post__userpicture} >
            <img src="https://cybersafett.com/wp-content/uploads/2020/08/profile-photo.jpeg" />
         </div>
         <div className={s.post__body}>
            <div className={s.post__text}>{props.text}</div>
            <div className={s.post__activity}>
               <div className={s.post__like}><img src={like} />{props.likes}</div>
               <div className={s.post__dislike}><img src={like} />{props.dislikes}</div>
            </div>
         </div>
      </div>
   );
};

export default PostItem;