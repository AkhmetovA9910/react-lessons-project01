import React from 'react';
import s from './Dialogs.module.css';
import loupe from './../../img/messages-icons/loupe.svg';
import send from './../../img/messages-icons/send-button.svg';
import smile from './../../img/messages-icons/smile.svg';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';

let Dialogs = (props) => {

  let dialogElements = props.dialogs.map(
    dialog =>
      <DialogItem
        key={dialog.id}
        itemPath={`/dialogs/${dialog.id}/`}
        dialogImage={dialog.img}
        dialogName={dialog.name}
        dialogLastMessage={dialog.message}
      />
  );
  let messageElements = props.messages.map(message => <MessageItem key={message.id} msgOwner={message.owner} msgText={message.text} />);

  let onNewMessageTextChange = (e) => {
    let text = e.target.value;
    props.updateNewMessageText(text);
  };
  let onSendMessageClick = () => {
    props.sendMessage();
  };

  return (
    <div className={`grid__element content ${s.dialogs}`}>
      <div className={s.dialogs__title}><span>Dialogs</span></div>
      <div className={s.dialogs__search}>
        <form>
          <div className={s.dialogs__loupe}><img src={loupe} /></div>
          <input className={s.dialogs__input} type="text" placeholder="Search a chat"></input>
          <div className={s.whitePlank}></div>
        </form>
      </div>
      <div className={s.dialogs__list}>
        {dialogElements}
      </div>
      <div className={s.dialogs__name}>
        <div className={s.dialogs__currentpicture}><img src={props.dialogs[0].img} /></div>
        <div className={s.dialogs__currentinfo}>
          <div className={s.dialogs__currentname}>Kevin</div>
          <div className={s.dialogs__currentstatus}>online</div>
        </div>
      </div>
      <div className={s.dialogs__messagesarea}>
        {messageElements}
      </div>
      <div className={s.dialogs__sendmessage}>
        <div className={s.dialogs__smile}><img src={smile} /></div>
        <textarea
          tabIndex="1"
          onChange={onNewMessageTextChange}
          className={`${s.dialogs__input} ${s.dialogs__input_message}`}
          placeholder="Type a message..."
          value={props.newMessageText}
        />
        <button tabIndex="2" onClick={onSendMessageClick} className={`${s.dialogs__sendbutton} sendbutton`}><img src={send} /></button>
      </div>
    </div>
  );
}

export default Dialogs;
