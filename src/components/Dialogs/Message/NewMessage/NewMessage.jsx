

import {Field, reduxForm} from "redux-form";

const NewMessageForm = (props) => {
  return (
      <div>
        <h1></h1>
        <form onSubmit={props.handleSubmit}>
          <div> <Field placeholder={'Send new message'} name={'newMessageBody'} component={'textarea'}/> </div>

          <div> <button>Send</button> </div>
        </form>
      </div>
  )}

const ReduxNewMessageForm = reduxForm ({form: 'newMessageForm'}) (NewMessageForm)

const NewMessage = (props) => {
  const onSubmit = (values) => {
    // console.log(values.newMessageBody)
    props.newMessage(values.newMessageBody)
  }
  return (
      <div>
        <ReduxNewMessageForm onSubmit = {onSubmit}/>
      </div>
  )}


export default NewMessage



// import React from "react";
//
// import d from "./Dialogs.module.css";
//
// const NewMessage = (props) => {
//   let newMessageElement = React.createRef();
//   let newMessage = () => {
//     props.newMessage();
//   };
//
//   let onMessageChange = () => {
//     let newText = newMessageElement.current.value;
//     props.updateNewMessageText(newText);
//   };
//
//   return (
//     <div className={d.messages}>
//       <textarea ref={newMessageElement} onChange={onMessageChange} value= {props.dialogsPage.newMessageText}></textarea>
//
//       <button onClick={newMessage}>Send Message</button>
//     </div>
//   );
// };
//
// export default NewMessage;
