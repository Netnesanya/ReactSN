import h from "./Header.module.css"
import React  from 'react';
import Header from "./Header";
import axios from "axios";

import {connect} from "react-redux";
import {getAuthUserData, setUserData} from "../../State/authReducer";
import {authAPI} from "../../API/api";

 class HeaderContainer extends React.Component {
componentDidMount() {


    this.props.getAuthUserData()

}
render() {
    return (
    <div className = {h.header}>
       <Header {...this.props} />
      </div>)}}

let mapStateToProps= (state) => {

     return {

        isAuth: state.auth.isAuth,
        id: state.auth.id,
        email: state.auth.email,
        login: state.auth.login,
    }
}


export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer)