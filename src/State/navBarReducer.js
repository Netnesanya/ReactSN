



export const navBarReducer = (state, action) =>  {
    

    if (action.type === "ADD-POST") {
        let newPost = {
          id: this.getState().profilePage.postData.length + 1,
          message: this.getState().profilePage.newPostText,
          likes: 0,
        };
        this.getState().profilePage.postData.push(newPost);
        this.getState().profilePage.newPostText = "";
        this._rerenderEntireTree(store.getState());
      } else if (action.type === "UPDATE-NEW-POST-TEXT") {
        this.getState().profilePage.newPostText = action.newText;
  
        this._rerenderEntireTree(this.getState());
      } else if (action.type === "SEND-NEW-MESSAGE" && action.newText !== '') {
        let newMessage = {
          id: this.getState().dialogsPage.messagesData.length + 1,
          message: this.getState().dialogsPage.newMessageText,
        };
        this.getState().dialogsPage.messagesData.push(newMessage);
        this.getState().dialogsPage.newMessageText = "";
        this._rerenderEntireTree(store.getState());
      } else if (action.type === "UPDATE-NEW-MESSAGE-TEXT") {
        this.getState().dialogsPage.newMessageText = action.newMessageText;
        this._rerenderEntireTree(this.getState());
      } 
    
return state;

    }
