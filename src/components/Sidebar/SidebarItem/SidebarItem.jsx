import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './SidebarItem.module.css';

let SidebarItem = (props) => {
  return (
    <div className={`${props.itemClass} ${s.sidebar__item}`}>
      <NavLink to={props.itemPath} activeClassName={s.active}><span className={props.itemIcon}></span>{props.itemName}</NavLink>
    </div>
  );
}

export default SidebarItem;