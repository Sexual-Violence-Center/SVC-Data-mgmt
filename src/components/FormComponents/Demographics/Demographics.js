import React, { Component } from 'react';
import Survey from './DemographicComponents/Survey';
import TypeOfViolence from './DemographicComponents/TypeOfViolence';
import DisabilityStatus from './DemographicComponents/DisabilityStatus';
import EthnicBackground from './DemographicComponents/EthnicBackground';
import ImmigrantStatus from './DemographicComponents/ImmigrantStatus';
import DemographicOther from './DemographicComponents/DemographicOther';

class Demographics extends Component {
    render(){
        return (
            <div className="demographics">
            <h2>Victim/Survivor Demographics</h2>
            <TypeOfViolence />
            <Survey />
            <DisabilityStatus />
            <EthnicBackground />
            <ImmigrantStatus />
            <DemographicOther />
        </div>
        )
    }
}

export default Demographics;