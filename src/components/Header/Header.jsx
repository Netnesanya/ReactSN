import h from "./Header.module.css";
import React from "react";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <div className={h.header}>
      <div className={h.loginBlock}>
        {props.isAuth ? (
          <div>
            {" "}
            {props.login} - <button onClick={props.logout}> Logout </button>{" "}
          </div>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
      <header className="header">
        <img
          alt="mocha"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Naruto_Shiki_Fujin.svg/1200px-Naruto_Shiki_Fujin.svg.png"
        />
      </header>

      <div></div>
    </div>
  );
};

export default Header;