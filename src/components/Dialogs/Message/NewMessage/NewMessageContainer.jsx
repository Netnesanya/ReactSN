import {  sendNewMessageActionCreator,
} from "../../../../Redux/dialogsReducer";
import NewMessage from "./NewMessage";
import {connect} from "react-redux";



const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage

  }


}
const mapDispatchToProps = (dispatch) => {

  return {
    newMessage: (newMessageBody) => {

      dispatch(sendNewMessageActionCreator(newMessageBody));
    },
  }
}

const NewMessageContainer = connect(mapStateToProps, mapDispatchToProps) ( NewMessage)

export default NewMessageContainer;
