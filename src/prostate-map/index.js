import './ProstateZoneSelector.styl';

import React, { Component } from 'react';
import { NumberSelector } from './NumberSelector.js';
import { LocationSelector } from './LocationSelector.js';

class ProstateZoneSelector extends Component {
  constructor(props) {
    super(props);
    this.state = { zone: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ zone: event.target.value });
  }

  render() {
    return (
      <div>
        <LocationSelector />
        <div className="number-selectors">
          <NumberSelector label="T2" />
          <NumberSelector label="DW" />
          <NumberSelector label="DC" />
          <NumberSelector label="PI" />
        </div>
      </div>
    );
  }
}

export default ProstateZoneSelector;
