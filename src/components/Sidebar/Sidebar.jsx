import React from 'react';
import s from './Sidebar.module.css';
import './../../img/sidebar-icons/iconfont.css';
import SidebarItem from './SidebarItem/SidebarItem';

let Sidebar = (props) => {
  let sidebarItems = props.sidebarItems.map((item) => <SidebarItem key={item.id} itemPath={item.path} itemIcon={item.iconClass} itemName={item.itemName} />);

  return (
    <nav className={`grid__element ${s.sidebar}`}>
      <div className={s.sidebar__list}>
        {sidebarItems}
      </div>
    </nav>
  );
}

export default Sidebar;
