import React from "react";
import { NavLink } from "react-router-dom";
import d from "./Dialogs.module.css";
import NewMessage from "./NewMessage/NewMessage";

const Message = (props) => {
  return (
    <div className={d.messages}>
      <div>
        {props.message}
        
      </div>
    </div>
  );
};

export default Message;
