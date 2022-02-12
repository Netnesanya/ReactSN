import React from "react";

class ProfileStatusClass extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };

  leaveEditMode() {
    this.setState({ editMode: false });
    this.props.updateStatus(this.state.status);
  }
  handleFocus = (event) => event.target.select();

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }
  }

  render() {
    return (
      <div>
        {!this.state.editMode && (
          <div>
            <span> {this.props.status}</span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input
              onChange={this.onStatusChange}
              autoFocus={true}
              onFocus={this.handleFocus}
              onBlur={this.leaveEditMode.bind(this)}
              value={this.state.status}
            />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatusClass;