import React, { Component } from "react";
import WheelButtonList from "../containers/wheel-button-list.js";
import WheelButtonDetail from "../containers/wheel-button-detail.js";

class Landing extends Component {
  render() {
    return (
      <div
        style={{
          height: "",
          backgroundColor: "#efefef",
          display: "block",
          overflow: "auto"
        }}
      >
        <WheelButtonDetail />
        <WheelButtonList />
      </div>
    );
  }
}

export default Landing;
