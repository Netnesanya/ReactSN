import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import LoginPage from './components/Login/LoginPage'
import { Route, Routes } from "react-router-dom";
import Feed from "./components/Feed_etc/Feed";
import Music from "./components/Feed_etc/Music";
import Settings from "./components/Feed_etc/Settings";
import React from "react";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


function App(props) {

  return (

    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar />
      <div className="app-wrapper-content">
          <Route
            path="/messages/"
            render={() =>
                <DialogsContainer/>}/>
          <Route
            path="/profile/:userId?"
            render={() =>
                <ProfileContainer
              />
            }
          />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/login" render={() => <LoginPage/>} />
          <Route path="/feed" render={() => <Feed />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />

      </div>
    </div>
  );
}

export default App;
