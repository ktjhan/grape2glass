import React, { Component } from "react";
import { connect } from "react-redux";
import { selectWheelButton } from "../actions/index";
import { bindActionCreators } from "redux";

class WheelButtonList extends Component {
  renderList() {
    return this.props.wheelbuttons.map(wheelbutton => {
      return (
        <li key={wheelbutton.name}>
          <button
            key={wheelbutton.name}
            onClick={() => this.props.selectWheelButton(wheelbutton)}
            type="button"
            className="btn btn-primary"
          >
            {wheelbutton.name}
          </button>
        </li>
      );
    });
  }

  render() {
    return <ul className="col-md-2">{this.renderList()}</ul>;
  }
}

function mapStateToProps(state) {
  return {
    wheelbuttons: state.wheelbuttons
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectWheelButton }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WheelButtonList);
