
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {sendNewMessageActionCreator, updateNewMessageTextActionCreator} from "../../State/dialogsReducer";
import NewMessage from "./Message/NewMessage/NewMessage";
import Redirect from "react-router/es/Redirect";
import React from "react";
import withAuthRedirect from "../../HOC/WithAuthRedirect";
import {compose} from "redux";



let AuthRedirectComponent = withAuthRedirect(Dialogs);


const mapStateToProps = (state) => {
return {
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth,
}}


export default compose(

    connect(mapStateToProps),withAuthRedirect, ) (Dialogs);
 //   const DialogsContainer = connect(mapStateToProps, ) (AuthRedirectComponent, NewMessage)

