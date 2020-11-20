import s from './Sidebar.module.css';
import './../../img/sidebar-icons/iconfont.css'
// import profile from './../../img/sidebar-icons/profile.svg';
// import messages from './../../img/sidebar-icons/messages.svg';
// import news from './../../img/sidebar-icons/news.svg';
// import music from './../../img/sidebar-icons/music.svg';
// import settings from './../../img/sidebar-icons/settings.svg';
import SidebarItem from './SidebarItem/SidebarItem';

let Sidebar = () => {
  return (
    <nav className={`grid__element ${s.sidebar}`}>
      <ul className={s.sidebar__list}>
        <SidebarItem itemPath="profile" itemIcon="icon_profile" itemName="Profile" />
        <SidebarItem itemPath="dialogs" itemIcon="icon_messages" itemName="Messages" />
        <SidebarItem itemPath="news" itemIcon="icon_news" itemName="News" />
        <SidebarItem itemPath="music" itemIcon="icon_music" itemName="Music" />
        <SidebarItem itemPath="settings" itemIcon="icon_settings" itemName="Settings" />
      </ul>
    </nav>
  );
}

export default Sidebar;
