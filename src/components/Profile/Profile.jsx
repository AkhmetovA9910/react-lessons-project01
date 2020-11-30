import background from './../../img/profile-background.jpg';
import avatar from './../../img/profile-pictures/avatar.jpg';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

let Profile = (props) => {
  return (
    <div className={`grid__element content ${s.profile}`}>
      <div className={s.profile__wallpaper}>
        <img src={background} />
        <div className={s.profile__greeting}>Welcome to the page!</div>
      </div>
      <div className={s.profile__body}>
        <div className={s.profile__picture}><img src={avatar} /></div>
        <div className={s.profile__info}>
          <div className={s.profile__name}>Name</div>
          <div className={s.profile__email}>E-mail</div>
        </div>
      </div>
      <MyPosts
        posts={props.profilePage.posts}
        newPostText={props.profilePage.newPostText}
        addPost={props.addPost}
        updateNewPostText={props.updateNewPostText}
      />
    </div>
  );
}

export default Profile;
