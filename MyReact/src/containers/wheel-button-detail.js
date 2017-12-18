import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addOption } from "../actions/index.js";

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
              onClick={() => this.props.addOption(item)}
              type="button"
              className="btn btn-primary"
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
      return (
        <div
          className="col-lg-3 col-md-offset-1"
          style={{
            backgroundColor: "#F5F5F5"
          }}
        >
          Please select a wheel button
        </div>
      );
    }
    return (
      <div
        className="col-lg-3 col-md-offset-1"
        style={{
          backgroundColor: "#F5F5F5"
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addOption }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WheelButtonDetail);
