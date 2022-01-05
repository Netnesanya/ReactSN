import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import LoginPage from './components/Login/LoginPage'
import {Route} from "react-router-dom";
import Feed from "./components/Feed_etc/Feed";
import Music from "./components/Feed_etc/Music";
import Settings from "./components/Feed_etc/Settings";
import React from "react";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect} from "react-redux";
import {initializeApp} from "./State/appReducer";
import Preloader from "./components/common/Preloader";


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (

            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route
                        path="/messages/"
                        render={() =>
                            <DialogsContainer/>}/>
                    <Route
                        path="/profile/:userId?"
                        render={() =>
                            <ProfileContainer
                            />}
                    />
                    <Route path="/users" render={() => <UsersContainer/>}/>
                    <Route path="/login" render={() => <LoginPage/>}/>
                    <Route path="/feed" render={() => <Feed/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>

                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default connect(mapStateToProps, {initializeApp})(App)
