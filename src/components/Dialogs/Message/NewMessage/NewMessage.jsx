import React from "react";

import d from "./Dialogs.module.css";

const NewMessage = (props) => {
  let newMessageElement = React.createRef();
  let newMessage = () => {
    props.newMessage();
  };

  let onMessageChange = () => {
    let newText = newMessageElement.current.value;
    // let action = updateNewMessageTextActionCreator(newText);
    // props.updateNewMessageText(action);
    props.updateNewMessageText(newText);
  };

  return (
    <div className={d.messages}>
      <textarea ref={newMessageElement} onChange={onMessageChange} value= {props.dialogsPage.newMessageText}></textarea>

      <button onClick={newMessage}>Send Message</button>
    </div>
  );
};

export default NewMessage;
