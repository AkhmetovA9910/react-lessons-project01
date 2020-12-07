import background from './../../img/profile-background.jpg';
import avatar from './../../img/profile-pictures/avatar.jpg';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from './Profile.module.css';

let Profile = () => {
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
      <MyPostsContainer />
    </div>
  );
}

export default Profile;
