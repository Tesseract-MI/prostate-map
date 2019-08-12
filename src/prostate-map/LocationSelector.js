import React, { Component } from 'react';
import Apex from './Apex.js';
import Base from './Base.js';
import Mid from './Mid.js';
import { locations } from './Enums.js';

export class LocationSelector extends Component {
  constructor(props) {
    super(props);
    this.state = { location: locations.base, zone: '', direction: '' };

    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleZoneChange = this.handleZoneChange.bind(this);
  }

  handleLocationChange(event) {
    this.setState({ zone: '', direction: '', location: event.target.value });
  }

  handleZoneChange(event) {
    this.setState({
      zone: event.target.getAttribute('zone'),
      direction: event.target.getAttribute('direction'),
    });
  }

  renderSVG() {
    if (this.state.location === locations.apex) {
      return <Apex onZoneChange={this.handleZoneChange} />;
    } else if (this.state.location === locations.base) {
      return <Base onZoneChange={this.handleZoneChange} />;
    } else if (this.state.location === locations.mid) {
      return <Mid onZoneChange={this.handleZoneChange} />;
    }
  }

  render() {
    return (
      <div className="prostate-zone-selector-location-selector">
        <select
          className="prostate-zone-selector-location-selector-select"
          value={this.state.location}
          onChange={this.handleLocationChange}
        >
          <option value={locations.apex}>Apex</option>
          <option value={locations.mid}>Mid</option>
          <option value={locations.base}>Base</option>
        </select>
        <div className="prostate-zone-selector-location-selector-label">
          <h3>
            {this.state.zone} {this.state.direction}
          </h3>
        </div>
        <div className="prostate-zone-selector-location-selector-svg">
          {this.renderSVG()}
        </div>
      </div>
    );
  }
}
