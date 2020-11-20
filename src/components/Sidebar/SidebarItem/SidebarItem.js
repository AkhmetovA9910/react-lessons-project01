import { NavLink } from 'react-router-dom';
import s from './SidebarItem.module.css';

let SidebarItem = (props) => {
  return (
    <li className={`${props.itemClass} ${s.sidebar__item}`}>
      <NavLink to={props.itemPath} activeClassName={s.active}><span className={props.itemIcon}></span>{props.itemName}</NavLink>
    </li>
  );
}

export default SidebarItem;