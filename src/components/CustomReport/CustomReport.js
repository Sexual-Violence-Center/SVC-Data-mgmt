import React, { Component } from 'react';
import { connect } from 'react-redux';

import ReportingNav from '../Nav/ReportingNav/ReportingNav';
import CustomAge from './CustomReportComponents/AgeCustomReport';
import CustomContactType from './CustomReportComponents/ContactTypeComponent';
import CustomDisability from './CustomReportComponents/DisabilityCustomReport';
import CustomGender from './CustomReportComponents/GenderCustomReport'
import ImmigrantCountryCustom from './CustomReportComponents/ImmigrantCountryCustom';
import IndividualsServiced from './CustomReportComponents/IndServicedCustom';
import CrisisCounseling from './CustomReportComponents/I-PCrisisCounselingCustom';
import AdvocacyCivilCustom from './CustomReportComponents/I-PAdvocacyCivilCustom';
import AdvocacyCriminalCustom from './CustomReportComponents/I-PAdvocacyCriminalCustom';
import AdvocacyMedicalCustom from './CustomReportComponents/I-PMedicalAdvocacy';
import AdvocacyOtherCustom from './CustomReportComponents/I-POtherAdvocacy';
import PhoneServicesCustom from './CustomReportComponents/PhoneServicesCustom';
import PoliceReportCustom from './CustomReportComponents/PoliceReportCustom';
import RaceEthnicityCustom from './CustomReportComponents/RaceEthnicityCustom';
import SexualOrientationCustom from './CustomReportComponents/SexualOrientationCustom';
import SpecialClassificationCustom from './CustomReportComponents/SpecialClassificationCustom';
import SupportOnCallCustom from './CustomReportComponents/SupportedOnCallCustom';
import TransgenderedCustom from './CustomReportComponents/TransgenderedCustom';
import TransortationCustom from './CustomReportComponents/TransportationCustom';
import VictimTypeCustom from './CustomReportComponents/VitcimTypeCustom';
import UnmetNeedsCustom from './CustomReportComponents/UnmetNeedsCustom';   
import TypesOfVictimizationCustom from './CustomReportComponents/TypesOfVictimizationCustom';
import ZipCodeCustom from './CustomReportComponents/ZipCustom';
import '../../styles/main.css'

const mapStateToProps = state => ({
    user: state.user,
    state,
});

class customReportSelectionPage extends Component{
    state = {
        querySeletor: ''
    }

    handleChangeFor = (event) => {
        const value = event.target.value 
        this.setState({
            querySeletor: value
        });
        this.props.dispatch({
            type: 'CUSTOM_REPORT_INPUT',
            payload: { querySeletor: value }
        })
    }

    submitCustomReport = (event) => {
        event.preventDefault();
        console.log('clicked submit Submit Custom Report', this.props.state.CustomReportReducer);
        this.props.dispatch({
            type: 'SUBMIT_CUSTOM_REPORT',
            payload: { ...this.state, ...this.props.state.CustomReportReducer }
        })
        }

    render(){
        const customReportTopic = [
            'Age', 'Contact Type', 'Disabilities', 
            'Gender Identity', 'Immigrant Country', 
            'Individuals Serviced', 'In-Person Crisis Counseling', 
            'In-Person Legal Advocacy(Civil)', 'In-Person Legal Advocacy(Criminal)', 
            'In-Person Medical Advocacy', 'Other In-Person Advocacy', 
            'Phone Services Provided', 'Police Report Filed', 'Race/Ethnicity', 
            'Referrals', 'Sexual Orientation', 
            'Special Classification of Victims', 'Supported on Call', 
            'Transgender', 'Transportation', 'Victim Types(Primary / Secondary)', 
            'Victimization Types(Totals)', 'Un-Met Needs', 'Zip Codes'
        ]

// loop over all custom report topics to display on screen
        let individualTopic = customReportTopic.map(topic => {
            return (
                <option
                    key={topic}>
                    {topic}
                </option>  
            )
        })

        // let content = null;
// Custom report options will only display if user is logged in as administrator
        // if (this.props.user.userName) {
        //     content = (
        //      TODO: add content here
        //     )
        // }

        return ( 
            <div>
                < ReportingNav />
                <h2> Custom Report Page </h2>
                {/* add calendar */}
                <form onSubmit={this.submitCustomReport}>
                    <select className="customReportTopics" multiple>
                        {individualTopic}
                    </select>
                    <input type="submit" />
                </form>

                <form value = {this.state.querySeletor} onChange = {this.handleChangeFor} >
                    <input type="radio" name="andSelector" value= 'and' /> <label htmlFor="andSelector">AND</label>
                    <input type="radio" name="orSelector" value='or' /> <label htmlFor="orSelector">OR</label>
                </form>

                <div className="customReportSpecificTopic">
                    < CustomAge />
                    < CustomContactType />
                    < CustomDisability />
                    < CustomGender />
                    < ImmigrantCountryCustom />
                    < IndividualsServiced/>
                    < CrisisCounseling/>
                    < AdvocacyCivilCustom/>
                    < AdvocacyCriminalCustom/>
                    < AdvocacyMedicalCustom />
                    < AdvocacyOtherCustom />
                    < PhoneServicesCustom />
                    < PoliceReportCustom />
                    < RaceEthnicityCustom />
                    < SexualOrientationCustom />
                    < SpecialClassificationCustom />
                    < SupportOnCallCustom />
                    < TransgenderedCustom />
                    < TransortationCustom />
                    < VictimTypeCustom />
                    < UnmetNeedsCustom />
                    < TypesOfVictimizationCustom />
                    < ZipCodeCustom />
                </div>
            </div>
        ) //end return

    } //end render
} //end class

export default connect(mapStateToProps)(customReportSelectionPage);
