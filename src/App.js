import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import {BrowserRouter, Route} from "react-router-dom";
import Feed from "./components/Feed_etc/Feed";
import Music from "./components/Feed_etc/Music";
import Settings from "./components/Feed_etc/Settings";
import React, {Suspense} from "react";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./State/appReducer";
import Preloader from "./components/common/Preloader";
import store from "./State/ReduxStore";
//import LoginPage from './components/Login/LoginPage'
//import DialogsContainer from "./components/Dialogs/DialogsContainer";
//import ProfileContainer from "./components/Profile/ProfileContainer";
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const LoginPage = React.lazy(() => import('./components/Login/LoginPage'));



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
                    <Suspense fallback={<div>Loading...</div>}>
                    <Route path="/messages/" render={() => <DialogsContainer/>}/>
                    <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                    <Route path="/users" render={() => <UsersContainer/>}/>
                    <Route path="/login" render={() => <LoginPage/> }/>
                    <Route path="/feed" render={() => <Feed/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                </Suspense>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

const AppContainer = connect(mapStateToProps, {initializeApp})(App)

let MainApp = () => {
    return (
    <BrowserRouter>
        <React.StrictMode>
            <Provider store={store}>
                learn react
                <AppContainer/>

            </Provider>
        </React.StrictMode>
    </BrowserRouter>
    )}
export default MainApp