import React, { Component } from "react";
import { connect } from "react-redux";

class WheelButtonDetail extends Component {
  getItemsList() {
    for (var i in this.props.optionslist) {
      if (
        this.props.optionslist[i].selection == this.props.activewheelbutton.name
      ) {
        return this.props.optionslist[i].items;
      }
    }
    return;
  }

  renderOptions() {
    if (this.getItemsList()) {
      return this.getItemsList().map(item => {
        return (
          <li key={item.text}>
            <button
              key={item.text}
              type="button"
              className="btn btn-primary"
              data-toggle="button"
              aria-pressed="false"
              autoComplete="off"
            >
              {item.text}
            </button>
          </li>
        );
      });
    }
  }
  render() {
    if (!this.props.activewheelbutton) {
      return <div>Please select a wheel button.</div>;
    }
    return (
      <div
        style={{
          height: "600px",
          width: "200px",
          backgroundColor: "white"
        }}
      >
        <div>{this.props.activewheelbutton.name}</div>
        <ul className="list-group col-sm-1">{this.renderOptions()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activewheelbutton: state.activeWheelButton,
    optionslist: state.optionsList
  };
}

export default connect(mapStateToProps)(WheelButtonDetail);
