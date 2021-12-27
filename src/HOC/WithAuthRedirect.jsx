import React from "react";
import Redirect from "react-router/es/Redirect";
import Dialogs from "../components/Dialogs/Dialogs";



export const WithAuthRedirect = (Component) => {
    class RedirectComponent extends  React.Component {
        render() {

                if (!this.props.isAuth) return <Redirect to={'/login'} />
                return <Component{...this.props} />

        }
    }
    return RedirectComponent
}

export default WithAuthRedirect;