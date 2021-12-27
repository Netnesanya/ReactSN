import React from "react";


class ProfileStatus extends React.Component {


    state = {
        editMode: false,
        status: this.props.status
    }
enterEditMode(){
    this.setState({editMode: true})};
leaveEditMode(){
        this.setState({editMode: false})
        this.props.updateStatus(this.state.status) }
    handleFocus = (event) => event.target.select()
    onStatusChange =(e) => {
    this.setState(
        {
          status: e.currentTarget.value
        })
    }

    render() {

        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.enterEditMode.bind(this)}> {this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onFocus={this.handleFocus} onBlur={this.leaveEditMode.bind(this)} value={this.state.status}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;