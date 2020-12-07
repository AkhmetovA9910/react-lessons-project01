
let initialState = {
   sidebarItems: [
      {
         id: 0,
         itemName: "Profile",
         path: "/profile/",
         iconClass: "icon_profile"
      },
      {
         id: 1,
         itemName: "Messages",
         path: "/dialogs/",
         iconClass: "icon_messages"
      },
      {
         id: 2,
         itemName: "News",
         path: "/news/",
         iconClass: "icon_news"
      },
      {
         id: 3,
         itemName: "Music",
         path: "/music/",
         iconClass: "icon_music"
      },
      {
         id: 4,
         itemName: "Users",
         path: "/users/",
         iconClass: "icon_users"
      },
      {
         id: 5,
         itemName: "Settings",
         path: "/settings/",
         iconClass: "icon_settings"
      }
   ]
};

const sidebarReducer = (state = initialState, action) => {
   switch (action.type) {

      default:
         return state;
   }
};


export default sidebarReducer;