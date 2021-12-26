import d from "./Dialogs.module.css";
import NewMessage from "./Message/NewMessage/NewMessage";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React  from 'react';
import NewMessageContainer from "./Message/NewMessage/NewMessageContainer";


let Dialogs = (props) => {

  let dialogsElements = props.dialogsPage.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} key ={dialog.id} img={dialog.img} />
  ));
  let messageElements = props.dialogsPage.messagesData.map((message) => (
    <Message message={message.message} key ={message.id} id={message.id}  />
  ));

  return (
    <div className={d.dialogs}>
      <div className={d.dialogsItems}>{dialogsElements}</div>
      <div>{messageElements}</div>
      <NewMessageContainer
      // dispatch={props.dispatch}
      //   className={d.messages}
      //   newMessageText={props.state.dialogsPage.newMessageText}
      />
    </div>
  );
};

export default Dialogs;
