import React, { Component } from 'react';
import TypeOfViolence from './DemographicComponents/TypeOfViolence';
import PoliceReport from './DemographicComponents/PoliceReport';
import Survey from './DemographicComponents/Survey';
import DisabilityStatus from './DemographicComponents/DisabilityStatus';
import EthnicBackground from './DemographicComponents/EthnicBackground';
import ImmigrantStatus from './DemographicComponents/ImmigrantStatus';
import DemographicOther from './DemographicComponents/DemographicOther';
import { Card } from '@material-ui/core';

const style = {
    padding: '20px',
    margin: '10px'
}

class Demographics extends Component {
    render() {
        return (
            <div className="demographics">
                <Card style={style}>
                    <h2>Victim/Survivor Demographics</h2>
                    <TypeOfViolence />
                    <PoliceReport />
                    <Survey />
                    <DisabilityStatus />
                    <EthnicBackground />
                    <ImmigrantStatus />
                    <DemographicOther />
                </Card>
        </div>
        )
    }
}

export default Demographics;