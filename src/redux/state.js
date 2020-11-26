let state = {
   dialogsPage: {
      dialogs: [
         {
            id: 1,
            img: '/../src/img/profile-pictures/avatar01.jpeg',
            name: "Kevin",
            message: "It's alright. I think he did'not make it on purpose. You really shoud tlk to him"
         },
         {
            id: 2,
            img: '/../src/img/profile-pictures/avatar02.jpg',
            name: "Dirk",
            message: "Hey maaaan! Have a nice time))"
         },
         {
            id: 3,
            img: '/../src/img/profile-pictures/avatar03.jpg',
            name: "Diana",
            message: "What's with that thing you've talked me about?"
         }
      ],
      messages: [
         {
            owner: "me",
            text: "Yep. What about you? Is it alright?"
         },
         {
            owner: "they",
            text: "It's alright. I think he did'not make it on purpose. You really shoud tlk to him"
         }
      ]
   },
   profilePage: {
      posts: [
         {
            text: "My first post ever!!!",
            likes: 10,
            dislikes: 3
         },
         {
            text: "Subscribe me!",
            likes: 11,
            dislikes: 2
         },
         {
            text: "Hello everyone))!",
            likes: 5,
            dislikes: 0
         },
         {
            text: "Happy birthday to ME!;)",
            likes: 29,
            dislikes: 1
         },
      ]
   }
};

export default state;