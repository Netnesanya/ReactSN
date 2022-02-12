import { profileReducer } from "./profileReducer";
import { dialogsReducer } from "./dialogsReducer";
import { usersReducer } from "./usersReducer";

let store = {
  _rerenderEntireTree() {},
  subscribe(observer) {
    store._rerenderEntireTree = observer;
  },
  _state: {
    usersPage: {
      users: [
        {
          id: 1,
          name: "Naruto",
          followers: 0,
          location: "RU",
          followed: false,
          img: "https://vistapointe.net/images/naruto-4.jpg",
        },
        {
          id: 2,
          name: "Kakashi",
          followers: 0,
          location: "RU",
          followed: false,
          img: "https://pbs.twimg.com/profile_images/912318190264438789/-yqpL-1S_400x400.jpg",
        },
        {
          id: 3,
          name: "Tsunade",
          followers: 0,
          location: "RU",
          followed: false,
          img: "https://qph.fs.quoracdn.net/main-qimg-edd5748057a8ba0e37ac30fc4af21d2b-lq",
        },
        {
          id: 4,
          name: "Sakura",
          followers: 0,
          location: "RU",
          followed: false,
          img: "https://i1.sndcdn.com/avatars-000736438537-zvc9fi-t500x500.jpg",
        },
      ],
    },
    profilePage: {
      postData: [
        { id: 1, message: "post Number 1", likes: 2 },
        { id: 2, message: "post Number 2", likes: 12 },
        { id: 3, message: "post Number 3", likes: 52 },
        { id: 4, message: "post Number 4", likes: 34 },
      ],
      newPostText: "What's new?",
    },
    dialogsPage: {
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
      newMessageText: "zhopa",
    },
  },
  getState() {
    return this._state;
  },

  dispatch(action) {
    profileReducer(this.getState().profilePage, action);
    dialogsReducer(this.getState().dialogsPage, action);
    usersReducer(this.getState().usersPage, action);
    this._rerenderEntireTree(this.getState());
  },
};

export default store;


