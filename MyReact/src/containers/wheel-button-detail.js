import React, { Component } from "react";
import { connect } from "react-redux";

class WheelButtonDetail extends Component {
  render() {
    if (!this.props.activewheelbutton) {
      return <div>Please select a wheel button.</div>;
    }
    return (
      <div
        className="center-align"
        style={{
          height: "600px",
          width: "200px",
          backgroundColor: "white"
        }}
      >
        {this.props.activewheelbutton.name}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activewheelbutton: state.activeWheelButton
  };
}

export default connect(mapStateToProps)(WheelButtonDetail);
