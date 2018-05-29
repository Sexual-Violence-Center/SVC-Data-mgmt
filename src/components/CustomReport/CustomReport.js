import React, { Component } from 'react';
import { connect } from 'react-redux';
import { USER_ACTIONS } from '../../redux/actions/userActions';

import AdminNav from '../Nav/AdminNav/AdminNav';
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

class customReportSelectionPage extends Component {
    state = {
        startDate: '',
        endDate: '',
        querySelector: null
    }

    handleChangeFor = (event) => {
        const target = event.target;
        console.log('target', target);
        
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
            this.props.dispatch({
                type: 'CUSTOM_REPORT_INPUT',
                payload: { ...this.state, [name]: value }
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

    render() {
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
    
// Custom report options will only display if user is logged in as administrator
        // let content = null;
        // if (this.props.user.userName) {
        //     content = (
        //      TODO: add content here
        //     )
        // }

        return (
            <div>
                <AdminNav />
                <div style={{
                    float: "right"
                    //, marginRight: "500px" 
                }}>
                <h2> Custom Report Page </h2>
                <form onSubmit={this.submitCustomReport}>
                    Start Date:
                    <input type="date" name="startDate" 
                        value={this.state.startDate} 
                        onChange={this.handleChangeFor}
                    />
                    End Date:
                    <input type="date" name="endDate" 
                        value={this.state.endDate} 
                        onChange={this.handleChangeFor}
                    />
                    <br/>
                        <input type="radio" name="querySelector" value='and' onChange={this.handleChangeFor}/> 
                            <label>AND</label>
                        <input type="radio" name="querySelector" value='or' onChange={this.handleChangeFor}/> 
                            <label>OR</label>
                        <input type="radio" name="querySelector" value='null' onChange={this.handleChangeFor}/> 
                            <label>Neither</label>
                        <br/>
                    <select className="customReportTopics" multiple>
                        {individualTopic}
                    </select>
                    <input type="submit" />
                    </form>

                    <div className="customReportSpecificTopic" 
                        style={{ float: "right"
                        //, marginRight: "500px" 
                    }}>
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
            </div>
        ) //end return

    } //end render
} //end class

export default connect(mapStateToProps)(customReportSelectionPage);
