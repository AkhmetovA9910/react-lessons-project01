import React from 'react';
import s from './MessageItem.module.css';

let MessageItem = (props) => {
   return (
      <div className={`${s.message__item} ${props.msgOwner == "me" ? s.me : s.they}`}>
         <div className={s.message__text}>{props.msgText}</div>
      </div>
   );
};

export default MessageItem;