import { connect } from 'react-redux';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/store';
import Dialogs from './Dialogs';

// let DialogsContainer = () => {
//   return <StoreContext.Consumer>
//     {
//       store => {

//         let state = store.getState();

//         let updateNewMessageText = (text) => {
//           let action = updateNewMessageTextActionCreator(text);
//           store.dispatch(action);
//         };

//         let sendMessage = () => {
//           let action = sendMessageActionCreator()
//           store.dispatch(action);
//         };

//         return (
//           <Dialogs
//             dialogs={state.dialogsPage.dialogs}
//             messages={state.dialogsPage.messages}
//             updateNewMessageText={updateNewMessageText}
//             sendMessage={sendMessage}
//             newMessageText={state.dialogsPage.newMessageText}
//           />
//         );
//       }
//     }
//   </StoreContext.Consumer>
// }

let mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageText: (text) => {
      let action = updateNewMessageTextActionCreator(text);
      dispatch(action);
    },
    sendMessage: () => {
      let action = sendMessageActionCreator()
      dispatch(action);
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
