import React, { Component } from 'react';
import TypeOfViolence from './DemographicComponents/TypeOfViolence/TypeOfViolence';
import PoliceReport from './DemographicComponents/PoliceReport';
import Survey from './DemographicComponents/Survey/Survey';
import DisabilityStatus from './DemographicComponents/DisabilityStatus/DisabilityStatus';
import EthnicBackground from './DemographicComponents/EthnicBackground';
import ImmigrantStatus from './DemographicComponents/ImmigrantStatus';
import DemographicOther from './DemographicComponents/DemographicOther/DemographicOther';
import { Card } from '@material-ui/core';

const style = {
    padding: '20px',
    margin: '10px'
}

class Demographics extends Component {
    render() {
        return <div className="demographics">
            <Card style={style}>
              <h2>Victim/Survivor Demographics</h2>
              <TypeOfViolence dispatchTo={this.props.dispatchTo} />
              <PoliceReport dispatchTo={this.props.dispatchTo} />
              <Survey dispatchTo={this.props.dispatchTo} />
              <DisabilityStatus dispatchTo={this.props.dispatchTo} />
              <EthnicBackground dispatchTo={this.props.dispatchTo} />
              <ImmigrantStatus dispatchTo={this.props.dispatchTo} />
              <DemographicOther dispatchTo={this.props.dispatchTo} />
            </Card>
          </div>;
    }
}

export default Demographics;