const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";

let initialState = {
   users: [
      // {
      //    id: 0,
      //    name: '',
      //    isFollowed: true,
      //    status: '',
      //    location: {
      //       country: '',
      //       city: ''
      //    }
      // },
      // {
      //    id: 1,
      //    name: '',
      //    isFollowed: true,
      //    status: '',
      //    location: {
      //       country: '',
      //       city: ''
      //    }
      // },
      // {
      //    id: 2,
      //    name: '',
      //    isFollowed: false,
      //    status: '',
      //    location: {
      //       country: '',
      //       city: ''
      //    }
      // }
   ]
};

const usersReducer = (state = initialState, action) => {
   switch (action.type) {
      case FOLLOW:
         return {
            ...state,
            users: state.users.map((user) => {
               if (user.id === action.userId)
                  return { ...user, isFollowed: true };
               return user;
            })
         };
      case UNFOLLOW:
         return {
            ...state,
            users: state.users.map((user) => {
               if (user.id === action.userId)
                  return { ...user, isFollowed: false };
               return user;
            })
         };

      case SET_USERS:
         return {
            ...state,
            users: [...state.users, ...action.users]
         };
      default:
         return state;
   }
};

export const followActionCreator = (userId) => ({ type: FOLLOW, userId });
export const unfollowActionCreator = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersActionCreator = (users) => ({ type: SET_USERS, users });

export default usersReducer;