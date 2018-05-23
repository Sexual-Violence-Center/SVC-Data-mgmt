import React, { Component } from 'react';
import { connect } from 'react-redux';

import ReportingNav from '../Nav/ReportingNav/ReportingNav';
import CustomAge from './CustomReportComponents/AgeCustomReport';
import CustomContactType from './CustomReportComponents/ContactTypeComponent';
import CustomDisability from './CustomReportComponents/DisabilityCustomReport';
import '../../styles/main.css'

const mapStateToProps = state => ({
    user: state.user,
    state,
});

class customReportSelectionPage extends Component{
    state = {
        //tbd if needed
    }

    // componentDidMount() {
    //     //load custom report options on page load
    // }

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
        // console.log('individualTopic', individualTopic);
    
        return ( 
            <div >
                < ReportingNav / >
                <h2> Custom Report Page </h2>
                <form>
                    <select className="customReportTopics" multiple>
                        {individualTopic}
                    </select>
                    <input type="submit" />
                </form>

                <div className="customReportSpecificTopic">
                    < CustomAge />
                    < CustomContactType />
                    < CustomDisability />
                </div>
            </div>

        ) //end return
    } //end render
} //end class

export default connect(mapStateToProps)(customReportSelectionPage);
