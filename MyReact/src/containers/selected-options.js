import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { removeOption } from "../actions/index.js";

class SelectedOptionsWindow extends Component {
  renderList() {
    return this.props.selectedoptions.map(text => {
      return (
        <li key={text}>
          <button
            onClick={() => {
              this.props.removeOption(text);
              this.forceUpdate();
            }}
            key={text}
            type="button"
            className="btn btn-primary"
          >
            {text}
          </button>
        </li>
      );
      return () => {
        return 0;
      };
    });
  }

  render() {
    if (!this.props.selectedoptions || !this.props.selectedoptions.length) {
      return <div>Please select at least one option.</div>;
    }
    return (
      <div>
        <p>Selected Options</p>
        <ul>{this.renderList()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedoptions: state.selectedOptions
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ removeOption }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(
  SelectedOptionsWindow
);
