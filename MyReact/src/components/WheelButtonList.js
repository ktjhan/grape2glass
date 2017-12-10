import React, { Component } from "react";
import { connect } from "react-redux";

class WheelButtonList extends Component {
  renderList() {
    return this.props.wheelbuttons.map(wheelbutton => {
      return (
        <button key={wheelbutton.name} type="button" class="btn btn-primary">
          Wheel button test
        </button>
      );
    });
  }

  render() {
    return <ul className="list-group col-sm-4">{renderList()}</ul>;
  }
}

function mapStateToProps(state) {
  return {
    wheelbuttons: state.wheelbuttons
  };
}

export default connect(mapStateToProps)(WheelButtonList);
