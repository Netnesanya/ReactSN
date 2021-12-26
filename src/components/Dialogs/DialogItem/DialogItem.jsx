import { NavLink } from "react-router-dom";
import d from "./Dialogs.module.css";
import React  from 'react';

const DialogItem = (props) => {
  let path = "/messages/" + props.id;

  
  return (
    <div className={d.dialog}>
      <img alt="avatar" src={props.img} />
      <NavLink to={path}>{props.name} </NavLink>
    </div>
  );
};


export default DialogItem;
