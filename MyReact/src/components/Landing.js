import React, { Component } from "react";
import WheelButtonList from "../containers/wheel-button-list.js";
import WheelButtonDetail from "../containers/wheel-button-detail.js";

class Landing extends Component {
  render() {
    return (
      <div
        style={{
          height: "",
          width: "100%",
          backgroundColor: "#efefef",
          display: "flex",
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
