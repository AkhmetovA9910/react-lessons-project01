import s from './Sidebar.module.css';
import './../../img/sidebar-icons/iconfont.css';
import SidebarItem from './SidebarItem/SidebarItem';

let Sidebar = () => {
  return (
    <nav className={`grid__element ${s.sidebar}`}>
      <div className={s.sidebar__list}>
        <SidebarItem itemPath="/profile/" itemIcon="icon_profile" itemName="Profile" />
        <SidebarItem itemPath="/dialogs/" itemIcon="icon_messages" itemName="Messages" />
        <SidebarItem itemPath="/news/" itemIcon="icon_news" itemName="News" />
        <SidebarItem itemPath="/music/" itemIcon="icon_music" itemName="Music" />
        <SidebarItem itemPath="/settings/" itemIcon="icon_settings" itemName="Settings" />
      </div>
    </nav>
  );
}

export default Sidebar;
