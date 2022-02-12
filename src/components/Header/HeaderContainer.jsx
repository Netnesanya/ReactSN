import h from "./Header.module.css";
import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { logout } from "../../State/authReducer";

class HeaderContainer extends React.Component {
  render() {
    return (
      <div className={h.header}>
        <Header {...this.props} />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    id: state.auth.id,
    email: state.auth.email,
    login: state.auth.login,
  };
};

export default connect(mapStateToProps, { logout })(HeaderContainer);