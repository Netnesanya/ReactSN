import d from "./Dialogs.module.css";
import NewMessage from "./Message/NewMessage/NewMessage";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React  from 'react';
import NewMessageContainer from "./Message/NewMessage/NewMessageContainer";
//import Redirect from "react-router/es/Redirect";


let Dialogs = (props) => {

  let dialogsElements = props.dialogsPage.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} key ={dialog.id} img={dialog.img} />
  ));
  let messageElements = props.dialogsPage.messagesData.map((message) => (
    <Message message={message.message} key ={message.id} id={message.id}  />
  ));

  //if (!props.isAuth) return <Redirect to={'/login'} />

  return (
    <div className={d.dialogs}>
      <div className={d.dialogsItems}>{dialogsElements}</div>
      <div>{messageElements}</div>
      <NewMessageContainer/>
    </div>
  );
};

export default Dialogs;
