import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import keycode from 'keycode';
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

import renderSuggestion from './StandardFunctionsForChips/renderSuggestion';

import '../../styles/main.css'

const mapStateToProps = state => ({
    user: state.user,
    state,
});

class customReportSelectionPage extends Component {
    state = {
        startDate: '',
        endDate: '',
        querySelector: null,
        // inputValue: '',
        selectedItem: [],
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

    handleChangeForComponent = (item) => {
        let { selectedItem } = this.state;
        if (selectedItem.indexOf(item) === -1) {
            selectedItem = [...selectedItem, item];
        }
        this.setState({
            inputValue: '',
            selectedItem,
        })
        this.props.dispatch({
            type: 'CUSTOM_REPORT_INPUT',
            payload: { ...this.state, selectedItem }
        })

    };

    handleDelete = item => () => {
        const selectedItem = [...this.state.selectedItem];
        selectedItem.splice(selectedItem.indexOf(item), 1);
        this.setState({ selectedItem });
        this.props.dispatch({
            type: 'CUSTOM_REPORT_INPUT',
            payload: { ...this.state, selectedItem }
        })
    };

    // handleInputChange = (event) => {
    //     this.setState({
    //         inputValue: event.target.value
    //     });
    // };

    handleKeyDown = event => {
        const { inputValue, selectedItem } = this.state;
        console.log('test', { inputValue, selectedItem });
        
        if (this.props.selectedItem.length && !this.props.inputValue.length && keycode(event) === 'backspace') {
        this.setState({
            selectedItem: selectedItem.slice(0, selectedItem.length - 1),
        });
        }
    };

    submitCustomReport = (event) => {
        event.preventDefault();
        console.log('clicked submit Submit Custom Report', this.props.state.CustomReportReducer);
        this.props.dispatch({
            type: 'SUBMIT_CUSTOM_REQUEST',
            payload: { ...this.props.state.CustomReportReducer,
                ...this.state
            }
        })
        this.props.history.push("/custom_report_output");

        }

    render() {
//         const customReportTopic = [
//             'Age', 'Contact Type', 'Disabilities',
//             'Gender Identity', 'Immigrant Country',
//             'Individuals Serviced', 'In-Person Crisis Counseling',
//             'In-Person Legal Advocacy(Civil)', 'In-Person Legal Advocacy(Criminal)',
//             'In-Person Medical Advocacy', 'Other In-Person Advocacy',
//             'Phone Services Provided', 'Police Report Filed', 'Race/Ethnicity',
//             'Referrals', 'Sexual Orientation',
//             'Special Classification of Victims', 'Supported on Call',
//             'Transgender', 'Transportation', 'Victim Types(Primary / Secondary)',
//             'Victimization Types(Totals)', 'Un-Met Needs', 'Zip Codes'
//         ]

// // loop over all custom report topics to display on screen
//         let individualTopic = customReportTopic.map(topic => {
//             return (
//                 <option
//                     key={topic}>
//                     {topic}
//                 </option>
//             )
//         })
    
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
                    {/* TODO: the form is to allow users "AND" or "OR" comparisions for custom reports */}
                    {/* <input type="radio" name="querySelector" value = 'and' onChange={this.handleChangeFor}/> 
                        <label>AND</label>
                    <input type="radio" name="querySelector" value='or' onChange={this.handleChangeFor}/> 
                        <label>OR</label>
                    <input type="radio" name="querySelector" value='null' onChange={this.handleChangeFor}/> 
                        <label>Neither</label>
                    <br/> */}
                    {/* <select className="customReportTopics" multiple>
                        {individualTopic}
                    </select> */}
                    <input type="submit" />
                    </form>

                    <div className="customReportSpecificTopic" 
                        style={{ float: "right"
                        //, marginRight: "500px" 
                    }}>
                    < CustomAge handleChangeForComponent={this.handleChangeForComponent} 
                        handleDelete={this.handleDelete} 

                        selectedItem={this.state.selectedItem} 
                        inputValue={this.props.inputValue}
                    />
                    < CustomContactType handleChangeForComponent={this.handleChangeForComponent} 
                        handleDelete={this.handleDelete} 
                        selectedItem={this.state.selectedItem} 
                        inputValue={this.props.inputValue}
                    />
                    < CustomDisability handleChangeForComponent={this.handleChangeForComponent} 
                        handleDelete={this.handleDelete} 
                        selectedItem={this.state.selectedItem} 
                        inputValue={this.props.inputValue}
                    />
                    < CustomGender handleChangeForComponent={this.handleChangeForComponent} 
                        handleDelete={this.handleDelete} 
                        selectedItem={this.state.selectedItem} 
                        inputValue={this.props.inputValue}
                    />
                    < ImmigrantCountryCustom handleChangeForComponent={this.handleChangeForComponent} 
                        handleDelete={this.handleDelete} 
                        selectedItem={this.state.selectedItem} 
                        inputValue={this.props.inputValue}
                    />
                    < IndividualsServiced handleChangeForComponent={this.handleChangeForComponent} 
                        handleDelete={this.handleDelete} 
                        selectedItem={this.state.selectedItem} 
                        inputValue={this.props.inputValue}
                    />
                    < CrisisCounseling handleChangeForComponent={this.handleChangeForComponent} 
                        handleDelete={this.handleDelete} 
                        selectedItem={this.state.selectedItem} 
                        inputValue={this.props.inputValue}
                    />
                    < AdvocacyCivilCustom handleChangeForComponent={this.handleChangeForComponent} 
                        handleDelete={this.handleDelete} 
                        selectedItem={this.state.selectedItem} 
                        inputValue={this.props.inputValue}
                    />
                    < AdvocacyCriminalCustom handleChangeForComponent={this.handleChangeForComponent} 
                        handleDelete={this.handleDelete} 
                        selectedItem={this.state.selectedItem} 
                        inputValue={this.props.inputValue}
                    />
                    < AdvocacyMedicalCustom handleChangeForComponent={this.handleChangeForComponent} 
                        handleDelete={this.handleDelete} 
                        selectedItem={this.state.selectedItem} 
                        inputValue={this.props.inputValue}
                    />
                    < AdvocacyOtherCustom handleChangeForComponent={this.handleChangeForComponent} 
                        handleDelete={this.handleDelete} 
                        selectedItem={this.state.selectedItem} 
                        inputValue={this.props.inputValue}
                    />
                    < PhoneServicesCustom handleChangeForComponent={this.handleChangeForComponent} 
                        handleDelete={this.handleDelete} 
                        selectedItem={this.state.selectedItem} 
                        inputValue={this.props.inputValue}
                    />
                    < PoliceReportCustom handleChangeForComponent={this.handleChangeForComponent} 
                        handleDelete={this.handleDelete} 
                        selectedItem={this.state.selectedItem} 
                        inputValue={this.props.inputValue}
                    />
                    < RaceEthnicityCustom handleChangeForComponent={this.handleChangeForComponent} 
                        handleDelete={this.handleDelete} 
                        selectedItem={this.state.selectedItem} 
                        inputValue={this.props.inputValue}
                    />
                    < SexualOrientationCustom handleChangeForComponent={this.handleChangeForComponent} 
                        handleDelete={this.handleDelete} 
                        selectedItem={this.state.selectedItem} 
                        inputValue={this.props.inputValue}
                    />
                    < SpecialClassificationCustom handleChangeForComponent={this.handleChangeForComponent} 
                        handleDelete={this.handleDelete} 
                        selectedItem={this.state.selectedItem} 
                        inputValue={this.props.inputValue}
                    />
                    < SupportOnCallCustom handleChangeForComponent={this.handleChangeForComponent} 
                        handleDelete={this.handleDelete} 
                        selectedItem={this.state.selectedItem} 
                        inputValue={this.props.inputValue}
                    />
                    < TransgenderedCustom handleChangeForComponent={this.handleChangeForComponent} 
                        handleDelete={this.handleDelete} 
                        selectedItem={this.state.selectedItem} 
                        inputValue={this.props.inputValue}
                    />
                    < TransortationCustom handleChangeForComponent={this.handleChangeForComponent} 
                        handleDelete={this.handleDelete} 
                        selectedItem={this.state.selectedItem} 
                        inputValue={this.props.inputValue}
                    />
                    < VictimTypeCustom handleChangeForComponent={this.handleChangeForComponent} 
                        handleDelete={this.handleDelete} 
                        selectedItem={this.state.selectedItem} 
                        inputValue={this.props.inputValue}
                    />
                    < UnmetNeedsCustom handleChangeForComponent={this.handleChangeForComponent} 
                        handleDelete={this.handleDelete} 
                        selectedItem={this.state.selectedItem} 
                        inputValue={this.props.inputValue}
                    />
                    < TypesOfVictimizationCustom handleChangeForComponent={this.handleChangeForComponent} 
                        handleDelete={this.handleDelete} 
                        selectedItem={this.state.selectedItem} 
                        inputValue={this.props.inputValue}
                    />
                    < ZipCodeCustom handleChangeForComponent={this.handleChangeForComponent} 
                        handleDelete={this.handleDelete} 
                        selectedItem={this.state.selectedItem} 
                        inputValue={this.props.inputValue}
                    />

                </div>
                </div>
            </div>
        ) //end return

    } //end render
} //end class

export default connect(mapStateToProps)(customReportSelectionPage);
