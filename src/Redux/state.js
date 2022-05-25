let state = {
  header: {},
  main: {
    content: {
      profile: {
        posts: [
          {id: 1, message: "Мой пост1", likesCount: 11},
          {id: 2, message: "Мой пост2", likesCount: 21},
          {id: 3, message: "Мой пост3", likesCount: 31},
          {id: 4, message: "Мой пост4", likesCount: 41},
        ],
      },
      messages: {
        messageNameData: [
          {id: '1', name: "Ilya"},
          {id: '2', name: "Anna"},
          {id: '3', name: "Vladislav"},
        ],
        messageTextData: [
          {id: 1, text: "It's me"},
          {id: 2, text: "Hello"},
          {id: 3, text: "Yo"},
        ],
      },
      music: {},
      news: {},
      settings: {},
    },
    sidebar: {},
  },
  footer: {},
}

export default state;