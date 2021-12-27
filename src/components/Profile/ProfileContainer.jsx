import React  from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, updateStatus, getStatus } from "../../State/profileReducer";
import {withRouter} from "react-router-dom";
import withAuthRedirect from "../../HOC/WithAuthRedirect";
import {compose} from "redux";



 class ProfileContainer extends React.Component{
     componentDidMount() {

         let userId = this.props.match.params.userId;
         if(!userId){
             userId =21464;
         }
         this.props.getUserProfile(userId)
         this.props.getStatus(userId)
     }

     render() {
  return (
    <Profile {...this.props} profile={this.props.profile} status={ this.props.status} updateStatus = {this.props.updateStatus}/>
  );
}}



//let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
    status: state.profilePage.status,
});

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)

//  let URLDataContainer = withRouter(AuthRedirectComponent)
//
// export default connect(mapStateToProps, {getUserProfile}) (URLDataContainer);
