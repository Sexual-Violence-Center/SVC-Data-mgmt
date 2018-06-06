import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import keycode from 'keycode';
import Modal from '@material-ui/core/Modal';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import { Paper, Typography, Card, Button, Grid, TextField } from '@material-ui/core';

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
import LocationCustom from './CustomReportComponents/LocationCustomReport';
import DateCustom from './CustomReportComponents/DateCustom';


import renderSuggestion from './StandardFunctionsForChips/renderSuggestion';
import CalendarModal from '../Modal/calendar.modal'
import { teal, grey } from '@material-ui/core/colors';


import '../../styles/main.css'
import { ListItem } from 'material-ui';

const mapStateToProps = state => ({
    user: state.user,
    state,
});
const style = {
    title: {
        backgroundColor:  teal[300],
        textAlign: 'center',
        color: 'white', 
        padding: '10px',
        
        // position: 'abosolute',
    },
    paper:{
        backgroundColor: grey[300], 
        padding: '10px',
        // margin: '50px',
        
    }
}
const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    menu: {
        width: 200,
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
    group: {
        margin: `${theme.spacing.unit}px 0`,
    },
});



class customReportSelectionPage extends Component {
    state = {
        startDate: '',
        endDate: '',
        querySelector: "",
        AgeCustomSelection: [],
        selectedItem: [],
        isOpen: false
    }

    componentDidMount = () => {
        this.props.dispatch({
            type: 'CUSTOM_REPORT_PAGE_LOADED'
        })
    }

    handleChangeForStartDate = (event) => {
        const value = event.target.value;
        this.setState({
            startDate: value
        });
            this.props.dispatch({
                type: 'UPDATE_START_DATE',
                payload: { startDate: value }
            })
    }

    handleChangeForEndDate = (event) => {
        const value = event.target.value;
        this.setState({
            endDate: value
        });
        this.props.dispatch({
            //TODO: FIX this to remove from redux state
            type: 'UPDATE_END_DATE',
            payload: { endDate: value }
        })
    }

    handleChangeForQuerySelector = (event) => {
        const value = event.target.value;
        this.setState({
            querySelector: value
        });
        this.props.dispatch({
            type: 'UPDATE_QUERY_SELECTOR',
            payload: { querySelector: value }
        })
    }

    handleChangeForComponent = (item) => {
        return (event) => {
            
            if (item.indexOf(item) === -1) {
                item = [...item, event];
            }
            this.setState({
                inputValue: '',
                [item]: [...this.state[item], event]
            })
            // console.log('chip', selectedItem);

            this.props.dispatch({
                type: 'UPDATE_SELECTED_ITEM',
                payload: { ...this.state, selectedItem: event }
            })
        }
    };

    handleDelete = (topicName) => (item) => {
        return (event) => {
            // console.log('clicked delete', item);
            const selectedItem = [...this.props.state.CustomReportInputReducer.selectedItem];
            console.log('clicked delete', item);
            selectedItem.splice(selectedItem.indexOf(selectedItem), 1);

            this.setState({ 
                [topicName]: []
            });

            this.props.dispatch({
                type: 'DELETE_SELECTED_ITEM',
                payload: { ...this.state, selectedItem: selectedItem }
            })
        }
    };

    submitCustomReport = (event) => {
        event.preventDefault();        
        if (this.state.startDate === '' || this.state.endDate === '') {
            this.setState({
                isOpen: true
            });
        } else {
            this.props.dispatch({
                type: 'SUBMIT_CUSTOM_REQUEST',
                payload: {
                    ...this.props.state.CustomReportInputReducer
                }
            })
            this.props.history.push("/custom_report_output");
        }
        console.log(this.state)
    }

    closeModel = () => {
        this.setState({
            isOpen: false
        });
    }
 
    render() {
    
// Custom report options will only display if user is logged in as administrator
        // let content = null;
        // if (this.props.user.userName) {
        //     content = (
        //      TODO: add content here
        //     )
        // }

        return <div>
            <AdminNav />
            <div style={{ flex: 0.5, margin: "20px", marginLeft: "200px", textAlign: "center" }}>
              {/* <Card > */}

              <Paper style={style.paper}>

                {/* <Card style={{margin: "10px", padding: "20px"}}> */}
                <div className="customReportSpecificTopic" style={{ margin: "auto" }
                    //, marginRight: "500px"
                  }>
                  <DateCustom querySelector = {this.state.querySelector} handleChangeForQuerySelector={this.handleChangeForQuerySelector} startDate={this.state.startDate} endDate={this.state.endDate} submitCustomReport={this.submitCustomReport} handleChangeForEndDate={this.handleChangeForEndDate} handleChangeForStartDate={this.handleChangeForStartDate} />
                  <Card style={{ margin: "10px", padding: "20px" }}>
                            <CustomAge handleChangeForComponent={this.handleChangeForComponent("AgeCustomSelection")} handleDelete={this.handleDelete("AgeCustomSelection")} selectedItem={this.state.AgeCustomSelection} inputValue={this.state.inputValue} />
                    <CustomContactType handleChangeForComponent={this.handleChangeForComponent} handleDelete={this.handleDelete} selectedItem={this.state.selectedItem} inputValue={this.state.inputValue} />
                    <CustomDisability handleChangeForComponent={this.handleChangeForComponent} handleDelete={this.handleDelete} selectedItem={this.state.selectedItem} inputValue={this.state.inputValue} />
                    <CustomGender handleChangeForComponent={this.handleChangeForComponent} handleDelete={this.handleDelete} selectedItem={this.state.selectedItem} inputValue={this.state.inputValue} />
                    <ImmigrantCountryCustom handleChangeForComponent={this.handleChangeForComponent} handleDelete={this.handleDelete} selectedItem={this.state.selectedItem} inputValue={this.state.inputValue} />
                    <IndividualsServiced handleChangeForComponent={this.handleChangeForComponent} handleDelete={this.handleDelete} selectedItem={this.state.selectedItem} inputValue={this.state.inputValue} />
                    <CrisisCounseling handleChangeForComponent={this.handleChangeForComponent} handleDelete={this.handleDelete} selectedItem={this.state.selectedItem} inputValue={this.state.inputValue} />
                    <AdvocacyCivilCustom handleChangeForComponent={this.handleChangeForComponent} handleDelete={this.handleDelete} selectedItem={this.state.selectedItem} inputValue={this.state.inputValue} />
                    <AdvocacyCriminalCustom handleChangeForComponent={this.handleChangeForComponent} handleDelete={this.handleDelete} selectedItem={this.state.selectedItem} inputValue={this.state.inputValue} />
                    <AdvocacyMedicalCustom handleChangeForComponent={this.handleChangeForComponent} handleDelete={this.handleDelete} selectedItem={this.state.selectedItem} inputValue={this.state.inputValue} />
                    <AdvocacyOtherCustom handleChangeForComponent={this.handleChangeForComponent} handleDelete={this.handleDelete} selectedItem={this.state.selectedItem} inputValue={this.state.inputValue} />
                    <PhoneServicesCustom handleChangeForComponent={this.handleChangeForComponent} handleDelete={this.handleDelete} selectedItem={this.state.selectedItem} inputValue={this.state.inputValue} />
                    <PoliceReportCustom handleChangeForComponent={this.handleChangeForComponent} handleDelete={this.handleDelete} selectedItem={this.state.selectedItem} inputValue={this.state.inputValue} />
                    <RaceEthnicityCustom handleChangeForComponent={this.handleChangeForComponent} handleDelete={this.handleDelete} selectedItem={this.state.selectedItem} inputValue={this.state.inputValue} />
                    <SexualOrientationCustom handleChangeForComponent={this.handleChangeForComponent} handleDelete={this.handleDelete} selectedItem={this.state.selectedItem} inputValue={this.state.inputValue} />
                    <SpecialClassificationCustom handleChangeForComponent={this.handleChangeForComponent} handleDelete={this.handleDelete} selectedItem={this.state.selectedItem} inputValue={this.state.inputValue} />
                    <LocationCustom handleChangeForComponent={this.handleChangeForComponent} handleDelete={this.handleDelete} selectedItem={this.state.selectedItem} inputValue={this.state.inputValue} />
                    <SupportOnCallCustom handleChangeForComponent={this.handleChangeForComponent} handleDelete={this.handleDelete} selectedItem={this.state.selectedItem} inputValue={this.state.inputValue} />
                    <TransgenderedCustom handleChangeForComponent={this.handleChangeForComponent} handleDelete={this.handleDelete} selectedItem={this.state.selectedItem} inputValue={this.state.inputValue} />
                    <TransortationCustom handleChangeForComponent={this.handleChangeForComponent} handleDelete={this.handleDelete} selectedItem={this.state.selectedItem} inputValue={this.state.inputValue} />
                    <VictimTypeCustom handleChangeForComponent={this.handleChangeForComponent} handleDelete={this.handleDelete} selectedItem={this.state.selectedItem} inputValue={this.state.inputValue} />
                    <UnmetNeedsCustom handleChangeForComponent={this.handleChangeForComponent} handleDelete={this.handleDelete} selectedItem={this.state.selectedItem} inputValue={this.state.inputValue} />
                    <TypesOfVictimizationCustom handleChangeForComponent={this.handleChangeForComponent} handleDelete={this.handleDelete} selectedItem={this.state.selectedItem} inputValue={this.state.inputValue} />
                    <ZipCodeCustom handleChangeForComponent={this.handleChangeForComponent} handleDelete={this.handleDelete} selectedItem={this.state.selectedItem} inputValue={this.props.inputValue} />
                  </Card>
                </div>

              </Paper>
            </div>

            {this.state.isOpen === true && <CalendarModal handleClose={this.closeModel} />}
          </div>; //end return

    } //end render
} //end class

export default connect(mapStateToProps)(customReportSelectionPage);
