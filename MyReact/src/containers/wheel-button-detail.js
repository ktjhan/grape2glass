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
          display: "inline-block",
          height: "300px",
          width: "100px",
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
