import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../Nav/Nav';
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

        // let individualTopic = customReportTopic.map


        return ( 
            <div >
                <h2> Custom Report Page </h2>
                <form action="/action_page.php">
                    <select name="cars" multiple>
                    {/* <option value={individualTopic}> {individualTopic} </option>
                    {individualTopic} */}
                    </select>
                    <input type="submit" />
                </form>
            </div>

        )// end return
    } //end render
} //end class customReportSelectionPage

export default connect(mapStateToProps)(customReportSelectionPage);