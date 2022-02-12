const updateMessageText = "UPDATE-NEW-MESSAGE-TEXT_DIALOGS_REDUCER";
const sendNewMessage = "SEND-NEW-MESSAGE_DIALOGS_REDUCER";

let initialState = {
  messagesData: [
    { id: 1, message: "np" },
    { id: 2, message: "Okay" },
    { id: 3, message: "see ya" },
    { id: 4, message: "i'm stupid" },
  ],
  dialogsData: [
    {
      name: "Naruto",
      id: "1",
      img: "https://vistapointe.net/images/naruto-4.jpg",
    },
    {
      name: "Kakashi",
      id: "2",
      img: "https://pbs.twimg.com/profile_images/912318190264438789/-yqpL-1S_400x400.jpg",
    },
    {
      name: "Tsunade",
      id: "3",
      img: "https://qph.fs.quoracdn.net/main-qimg-edd5748057a8ba0e37ac30fc4af21d2b-lq",
    },
    {
      name: "Sakura",
      id: "4",
      img: "https://i1.sndcdn.com/avatars-000736438537-zvc9fi-t500x500.jpg",
    },
  ],
};

export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
    case sendNewMessage:
      //let  message= action.newMessageText;

      return {
        ...state,

        messagesData: [
          ...state.messagesData,
          { id: state.messagesData.length + 1, message: action.newMessageBody },
        ],
      };

    // case updateMessageText:
    //     return { ...state, newMessageText: action.newMessageText}
  }
};

export let updateNewMessageTextActionCreator = (newText) => ({
  type: "UPDATE-NEW-MESSAGE-TEXT",
  newMessageText: newText,
});

export let sendNewMessageActionCreator = (newMessageBody) => ({
  type: sendNewMessage,
  newMessageBody,
});
