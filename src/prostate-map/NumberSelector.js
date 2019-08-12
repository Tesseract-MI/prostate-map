import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class NumberSelector extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = { value: '3' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div className="prostate-zone-selector-number-selector">
        <label>{this.props.label}</label>
        <select
          className="prostate-zone-selector-number-selector-select"
          value={this.state.value}
          onChange={this.handleChange}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
    );
  }
}
