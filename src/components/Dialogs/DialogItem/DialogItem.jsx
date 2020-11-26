import { NavLink } from 'react-router-dom';
import s from './DialogItem.module.css';

let DialogItem = (props) => {
   return (
      <NavLink to={props.itemPath} activeClassName={s.active}>
         <div className={`${s.dialog__item}`}>
            <div className={s.dialog__avatar}><img src={props.dialogImage} /></div>
            <div className={s.dialog__info}>
               <div className={s.dialog__name}>{props.dialogName}</div>
               <div className={s.dialog__lastmsg}>{props.dialogLastMessage}</div>
            </div>
         </div>
      </NavLink>
   );
};

export default DialogItem;