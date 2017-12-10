import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper black">
          <ul className="left">
            <li className="center">
              <Dropdown
                id="myDropdown"
                options={options}
                value="a"
                labelField="description"
                valueField="code"
                onChange={dropDownOnChange}
              />
            </li>
            <li>
              <img src="../../public/images/magnifying_glass.png" height="30" />
            </li>
            <li>
              <input type="text" className="mat-input" size="10" />
            </li>
          </ul>
          <a className="center brand-logo">
            <img
              src="../../public/images/grape2glass_vf_blanc_web.png"
              height="55"
            />
          </a>
          <ul className="right">
            <li>
              <a style={{ textDecoration: "none" }}>Sign in</a>
            </li>
            <li>
              <a style={{ textDecoration: "none" }}>Register</a>
            </li>
            <li>
              <a style={{ textDecoration: "none" }}> Login with Google</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

var options = [
  {
    description: "En",
    code: "a"
  },
  {
    description: "Fr",
    code: "b"
  }
];

var dropDownOnChange = function(change) {
  alert(
    "onChangeForSelect:\noldValue: " +
      change.oldValue +
      "\nnewValue: " +
      change.newValue
  );
};

var Dropdown = React.createClass({
  propTypes: {
    id: React.PropTypes.string.isRequired,
    options: React.PropTypes.array.isRequired,
    value: React.PropTypes.oneOfType([
      React.PropTypes.number,
      React.PropTypes.string
    ]),
    valueField: React.PropTypes.string,
    labelField: React.PropTypes.string,
    onChange: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      value: null,
      valueField: "value",
      labelField: "label",
      onChange: null
    };
  },

  getInitialState: function() {
    var selected = this.getSelectedFromProps(this.props);
    return {
      selected: selected
    };
  },

  componentWillReceiveProps: function(nextProps) {
    var selected = this.getSelectedFromProps(nextProps);
    this.setState({
      selected: selected
    });
  },

  getSelectedFromProps(props) {
    var selected;
    if (props.value === null && props.options.length !== 0) {
      selected = props.options[0][props.valueField];
    } else {
      selected = props.value;
    }
    return selected;
  },

  render: function() {
    var self = this;
    var options = self.props.options.map(function(option) {
      return (
        <option
          key={option[self.props.valueField]}
          value={option[self.props.valueField]}
        >
          {option[self.props.labelField]}
        </option>
      );
    });
    return (
      <select
        id={this.props.id}
        className="form-control"
        value={this.state.selected}
        onChange={this.handleChange}
      >
        {options}
      </select>
    );
  },

  handleChange: function(e) {
    if (this.props.onChange) {
      var change = {
        oldValue: this.state.selected,
        newValue: e.target.value
      };
      this.props.onChange(change);
    }
    this.setState({ selected: e.target.value });
  }
});

export default Header;
