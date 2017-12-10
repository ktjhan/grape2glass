import React, { Component } from "react";
import WheelButtonList from "./WheelButtonList";

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
      </div>
    );
  }
}

export default Landing;
