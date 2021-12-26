
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {sendNewMessageActionCreator, updateNewMessageTextActionCreator} from "../../State/dialogsReducer";
import NewMessage from "./Message/NewMessage/NewMessage";




const mapStateToProps = (state) => {
return {
    dialogsPage: state.dialogsPage,

}


}
// const mapDispatchToProps = (dispatch) => {
//     return {
//         newMessage: () => {
//             dispatch(sendNewMessageActionCreator());
//         },
//         onMessageChange: (newText) => {
//             // let newText = newMessageElement.current.value;
//             let action = updateNewMessageTextActionCreator(newText);
//             dispatch(action);
//         }
//     }
// }



    const DialogsContainer = connect(mapStateToProps, ) (Dialogs, NewMessage)

    export default DialogsContainer;