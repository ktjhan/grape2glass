import React, { Component } from "react";
import WheelButtonList from "../containers/wheel-button-list.js";
import WheelButtonDetail from "../containers/wheel-button-detail.js";

class Landing extends Component {
  render() {
    return (
      <div style={{ height: "700px", backgroundColor: "#efefef" }}>
        {/*<img
          className="img-responsive col-md-7"
          src="../../public/images/image19.png"
          height="100%"
          width="100%"
        />*/}
        <WheelButtonList />
        <WheelButtonDetail />
      </div>
    );
  }
}

export default Landing;
