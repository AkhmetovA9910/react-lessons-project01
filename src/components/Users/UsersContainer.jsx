import { connect } from 'react-redux';
import { followActionCreator, setUsersActionCreator, unfollowActionCreator } from '../../redux/usersReducer';
import Users from './Users';

let mapStateToProps = (state) => {
   return {};
};

let mapDispatchToProps = (dispatch) => {
   return {
      onFollowButtonClick: (userId) => {
         let action = followActionCreator(userId);
         dispatch(action);
      },
      onUnfollowButtonClick: (userId) => {
         let action = unfollowActionCreator(userId);
         dispatch(action);
      },
      setUsers: (users) => {
         let action = setUsersActionCreator(users);
         dispatch(action);
      }
   };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;