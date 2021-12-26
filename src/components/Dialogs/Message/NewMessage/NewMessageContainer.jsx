import {
  updateNewMessageTextActionCreator,
  sendNewMessageActionCreator,
} from "../../../../State/dialogsReducer";
import NewMessage from "./NewMessage";
import {connect} from "react-redux";



const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage

  }


}
const mapDispatchToProps = (dispatch) => {

  return {
    updateNewMessageText: (newText) => {
      // let newText = newMessageElement.current.value;

      dispatch(updateNewMessageTextActionCreator(newText));
    },
    newMessage: () => {
      dispatch(sendNewMessageActionCreator());
    },

  }
}

const NewMessageContainer = connect(mapStateToProps, mapDispatchToProps) ( NewMessage)

export default NewMessageContainer;
