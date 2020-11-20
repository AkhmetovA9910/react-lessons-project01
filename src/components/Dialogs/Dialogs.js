import s from './Dialogs.module.css';
import loupe from './../../img/messages-icons/loupe.svg';
import send from './../../img/messages-icons/send-button.svg';

let Dialogs = () => {
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
        <div className={s.dialogs__body}>

        </div>
      </div>
      <div className={s.dialogs__name}></div>
      <div className={s.dialogs__messages}></div>
      <div className={s.dialogs__sendmessage}>
        <form>
          <input className={`${s.dialogs__input} ${s.dialogs__input_message}`} type="text" placeholder="Type a message..."></input>
          <div className={s.dialogs__send}><img src={send} /></div>
        </form>
      </div>
    </div>
  );
}

export default Dialogs;
