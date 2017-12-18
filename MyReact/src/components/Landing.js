import React, { Component } from "react";
import WheelButtonList from "../containers/wheel-button-list.js";
import WheelButtonDetail from "../containers/wheel-button-detail.js";
import SelectedOptionsWindow from "../containers/selected-options.js";

class Landing extends Component {
  render() {
    return (
      <div
        style={{
          width: "100%",
          backgroundColor: "#efefef",
          display: "flex",
          overflow: "auto"
        }}
      >
        <WheelButtonDetail />
        <WheelButtonList />
        <SelectedOptionsWindow />
      </div>
    );
  }
}

export default Landing;
