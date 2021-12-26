import h from "./Header.module.css"
import React  from 'react';
import Header from "./Header";
import axios from "axios";

import {connect} from "react-redux";
import {setUserData} from "../../State/authReducer";

 class HeaderContainer extends React.Component {
componentDidMount() {


    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
        .then(response => {
            if(response.data.resultCode ===0) {
            this.props.setUserData(response.data.data)
            }})

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


export default connect(mapStateToProps, {setUserData})(HeaderContainer)