import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/store';
import Dialogs from './Dialogs';

let DialogsContainer = (props) => {

  let state = props.store.getState();

  let updateNewMessageText = (text) => {
    let action = updateNewMessageTextActionCreator(text);
    props.store.dispatch(action);
  };

  let sendMessage = () => {
    let action = sendMessageActionCreator()
    props.store.dispatch(action);
  };

  return (
    <Dialogs
      dialogs={state.dialogsPage.dialogs}
      messages={state.dialogsPage.messages}
      updateNewMessageText={updateNewMessageText}
      sendMessage={sendMessage}
      newMessageText={state.dialogsPage.newMessageText}
    />
  );
}

export default DialogsContainer;
