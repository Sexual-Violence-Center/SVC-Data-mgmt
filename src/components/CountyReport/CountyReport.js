import React, { Component } from 'react';
import { connect } from 'react-redux';
import { USER_ACTIONS } from '../../redux/actions/userActions';

import Calendar from 'react-calendar'
// import Calendar from 'rc-calendar'
import ReportingNav from '../Nav/ReportingNav/ReportingNav';


const mapStateToProps = state => ({
    user: state.user,
    state
});

// class CountyReport extends Component {
//     render() {
//         return (
//             <div>
//                 <ReportingNav />
//                 <h2>County Reports</h2>
//             </div>
            
//         )
//     }
// }
class CountyReport extends Component{ 

    componentDidMount () {
        
        this.props.dispatch({type: USER_ACTIONS.FETCH_USER});
        this.props.dispatch({ type:'GET_PERSON_DATA', payload: {startDate: '1900-01-01', endDate: '2020-01-01'}});
        console.log(this.props.state.getPersonReducer)
    }

    render () {
        return (
            <div className="federalReport">
            <ReportingNav />
            <h2>County Report:</h2>
            <h3>Start Date:<Calendar /></h3><h3> End Date:<Calendar /></h3> 
                <button>go</button>  
                <button>Print</button>
            <div className="dropdown">
            <section className="total">
                <h4>Hennepin County residents who received services during the reporting period</h4>
                <table className="federalTable">
                <thead>
                    <tr>
                        <th>Types of Individuals</th>
                        <th>Number</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Total:</td>
                        <td>{this.props.state.getPersonReducer.total_clients_served}</td>
                    </tr>
                    </tbody>
                </table>
            </section>
            <section className="new">
                <h4>New Hennepin County residents who recieved services during the reporting period</h4>
                <table className="countyTable">
                <thead>
                    <tr>
                        <th>Types of Individuals</th>
                        <th>Number</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Total Clients Served During the Reporting Period</td>
                        <td>{this.props.state.getPersonReducer.total_clients_served}</td>
                    </tr>
                    <tr>
                        <td>Total Clients Served in Advocacy Program</td>
                        <td>{this.props.state.getPersonReducer.total_victims}</td>
                    </tr>
                    <tr>
                        <td>Total Clients Served in Individual Counseling Program</td>
                        <td>{this.props.state.getPersonReducer.total_clients_individual_counseling}</td>
                    </tr>
                    <tr>
                        <td>Total Clients Served in Group Counseling Program</td>
                        <td>{this.props.state.getPersonReducer.total_clients_group_counseling}</td>
                    </tr>
                    <tr>
                        <td>Location of Service</td>
                        <td>{this.props.state.getPersonReducer.total_victims}</td>
                    </tr>
                    </tbody>
                </table>
            </section>
            <section className="county">
                <h4>New Hennepin County residents by victim type who recieved services during the reporting period</h4>
                <table className="countyTable">
                <thead>
                    <tr>
                        <th>Type of Individual</th>
                        <th>Number</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Adult Primary Victim/Survivor</td>
                        <td>{this.props.state.getPersonReducer.amerIndAlaskaNative}</td>
                    </tr>
                    <tr>
                        <td>Adult Secondary Victim/Survivor</td>
                        <td>{this.props.state.getPersonReducer.victim_ethnicity_asian}</td>
                    </tr>
                    <tr>
                        <td>Youth Primary Victim/Survivor</td>
                        <td>{this.props.state.getPersonReducer.africanAmerican}</td>
                    </tr>
                    <tr>
                        <td>Youth Secondary Victim/Survivor</td>
                        <td>{this.props.state.getPersonReducer.hispanicOrLatino}</td>
                    </tr>
                    </tbody>
                </table>
            </section>
            <section className="gender">
                <h4>Hennepin County Zip Code Totals</h4>
                <table className="federalTable">
                <thead>
                    <tr>
                        <th>Zip Code</th>
                        <th>Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>55011</td>
                        <td>{this.props.state.getPersonReducer.victim_zipcode_55111}</td>
                    </tr>
                    </tbody>
                </table>
            </section>
            <section className="Age">
                <h4>Demographics: Age</h4>
                <table className="federalTable">
                <thead>
                    <tr>
                        <th>Age Range</th>
                        <th>Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>0 - 18</td>
                        <td>{this.props.state.getPersonReducer.victim_age_zero_to_eightteen}</td>
                    </tr>
                    <tr>
                        <td>19 - 50</td>
                        <td>{this.props.state.getPersonReducer.victim_age_nineteen_to_fifty}</td>
                    </tr>
                    <tr>
                        <td>50+</td>
                        <td>{this.props.state.getPersonReducer.victim_age_over_fifty}</td>
                    </tr>
                    <tr>
                        <td>Not Reported</td>
                        <td>{this.props.state.getPersonReducer.victim_age_unknown}</td>
                    </tr>
                    </tbody>
                </table>
            </section>
            <section className="race">
                <h4>Demographics: Race/Ethnicity</h4>
                <table className="federalTable">
                <thead>
                    <tr>
                        <th>Race/Ethnicity</th>
                        <th>Primary</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>American Indian of Alaskan Native</td>
                        <td>{this.props.state.getPersonReducer.amerIndAlaskaNative}</td>
                    </tr>
                    <tr>
                        <td>Asian</td>
                        <td>{this.props.state.getPersonReducer.victim_ethnicity_asian}</td>
                    </tr>
                    <tr>
                        <td>Black or African American</td>
                        <td>{this.props.state.getPersonReducer.africanAmerican}</td>
                    </tr>
                    <tr>
                        <td>Hispanic or Latino</td>
                        <td>{this.props.state.getPersonReducer.hispanicOrLatino}</td>
                    </tr>
                    <tr>
                        <td>Natice Hawaiian or Other Pacific Islander</td>
                        <td>{this.props.state.getPersonReducer.pacificIslanderHawaiian}</td>
                    </tr>
                    <tr>
                        <td>White Non-Latino or Caucasian</td>
                        <td>{this.props.state.getPersonReducer.white}</td>
                    </tr>
                    <tr>
                        <td>Other Race</td>
                        <td>{this.props.state.getPersonReducer.other}</td>
                    </tr>
                    <tr>
                        <td>Multiple Races</td>
                        <td>{this.props.state.getPersonReducer.multiple_races}</td>
                    </tr>
                    <tr>
                        <td>Not Reported</td>
                        <td>{this.props.state.getPersonReducer.not_reported}</td>
                    </tr>
                    </tbody>
                </table>
            </section>
            <section className="gender">
                <h4>Demographics: Gender Identity</h4>
                <table className="federalTable">
                <thead>
                    <tr>
                        <th>Gender Identity</th>
                        <th>Number</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Male</td>
                        <td>{this.props.state.getPersonReducer.victim_gender_male}</td>
                    </tr>
                    <tr>
                        <td>Female</td>
                        <td>{this.props.state.getPersonReducer.victim_gender_female}</td>
                    </tr>
                    <tr>
                        <td>Non-Binary</td>
                        <td>{this.props.state.getPersonReducer.victim_gender_non_binary}</td>
                    </tr>
                    <tr>
                        <td>Other</td>
                        <td>{this.props.state.getPersonReducer.victim_gender_other}</td>
                    </tr>
                    <tr>
                        <td>Not Reported</td>
                        <td>{this.props.state.getPersonReducer.victim_gender_unknown}</td>
                    </tr>
                    <tr>
                        <td>Total:</td>
                        <td>{this.props.state.getPersonReducer.total_gender_count}</td>
                    </tr>
                    </tbody>
                </table>
            </section>
            <section className="victimization">
                <h4>##Types of Victimization</h4>
                <table className="federalTable">
                <thead>
                    <tr>
                        <th>##Victimization Types</th>
                        <th>Number</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Adult Sexual Assault</td>
                        <td>{this.props.state.getPersonReducer.violence_adult_sexual}</td>
                    </tr>
                    <tr>
                        <td>Adult Sexually Abused/Assaulted as Children Total</td>
                        <td>{this.props.state.getPersonReducer.violence_adult_when_child_total}</td>
                    </tr>
                            <tr>
                                <td>Adult Sexually Abused/Assaulted as Children by Family</td>
                                <td>{this.props.state.getPersonReducer.violence_adult_when_child_by_family}</td>
                            </tr>
                            <tr>
                                <td>Adult Sexually Abused/Assaulted as Children by Other</td>
                                <td>{this.props.state.getPersonReducer.violence_adult_when_child_by_other}</td>
                            </tr>
                    <tr>
                        <td>Bullying</td>
                        <td>{this.props.state.getPersonReducer.violence_bullying}</td>
                    </tr>
                    <tr>
                        <td>Child Pornography</td>
                        <td>{this.props.state.getPersonReducer.violence_child_pornography}</td>
                    </tr>
                    <tr>
                        <td>Child Sexual Abuse/Assault Total</td>
                        <td>{this.props.state.getPersonReducer.violence_minor_total}</td>
                    </tr>
                            <tr>
                                <td>Child Sexual Abuse/Assault by Family</td>
                                <td>{this.props.state.getPersonReducer.violence_minor_by_family}</td>
                            </tr>
                            <tr>
                                <td>Child Sexual Abuse/Assault by Other</td>
                                <td>{this.props.state.getPersonReducer.violence_minor_by_other}</td>
                            </tr>
                    <tr>
                        <td>Domestic And/Or Family Violence</td>
                        <td>{this.props.state.getPersonReducer.violence_domestic}</td>
                    </tr>
                    <tr>
                        <td>Elder Abuse or Neglect</td>
                        <td>{this.props.state.getPersonReducer.violence_elder}</td>
                    </tr>
                    <tr>
                        <td>Human Trafficking: Sex</td>
                        <td>{this.props.state.getPersonReducer.violence_exploitation_trafficking}</td>
                    </tr>
                    <tr>
                        <td>Stalking/Harassment Total</td>
                        <td>{this.props.state.getPersonReducer.violence_stalking_harassment_total}</td>
                    </tr>
                            <tr>
                                <td>Stalking/Harassment - Exposing</td>
                                <td>{this.props.state.getPersonReducer.violence_exposing}</td>
                            </tr>
                            <tr>
                                <td>Stalking/Harassment - Harassment</td>
                                <td>{this.props.state.getPersonReducer.violence_harassment}</td>
                            </tr>
                            <tr>
                                <td>Stalking/Harassment - Internet</td>
                                <td>{this.props.state.getPersonReducer.violence_internet}</td>
                            </tr>
                            <tr>
                                <td>Stalking/Harassment - Phone</td>
                                <td>{this.props.state.getPersonReducer.violence_phone}</td>
                            </tr>
                            <tr>
                                <td>Stalking/Harassment - Stalking</td>
                                <td>{this.props.state.getPersonReducer.violence_stalking}</td>
                            </tr>
                    <tr>
                        <td>Teen Dating Victimization</td>
                        <td>{this.props.state.getPersonReducer.violence_teen_dating}</td>
                    </tr>
                    <tr>
                        <td>Unknown/Pass/Doesn't Know</td>
                        <td>{this.props.state.getPersonReducer.violence_unknown}</td>
                    </tr>
                    <tr>
                        <td>Other</td>
                        <td>{this.props.state.getPersonReducer.violence_other}</td>
                    </tr>
                    <tr>
                        <td>Multiple Types of Violence</td>
                        <td>{this.props.state.getPersonReducer.victim_multiple_types_violence}</td>
                    </tr>
                    <tr>
                        <td>Deaf/Hard of Hearing</td>
                        <td>{this.props.state.getPersonReducer.disability_deaf}</td>
                    </tr>
                    <tr>
                        <td>Homeless</td>
                        <td>{this.props.state.getPersonReducer.homeless}</td>
                    </tr>
                    <tr>
                        <td>Immigrants/Refugees/Asylum Seekers</td>
                        <td>{this.props.state.getPersonReducer.victim_immigrant}</td>
                    </tr>
                    <tr>
                        <td>LGBTQ</td>
                        <td>{this.props.state.getPersonReducer.lgbtq}</td>
                    </tr>
                    <tr>
                        <td>Veterans</td>
                        <td>{this.props.state.getPersonReducer.veteran}</td>
                    </tr>
                    <tr>
                        <td>Victims with Disabilities: Cognitive/Physical/Mental</td>
                        <td>{this.props.state.getPersonReducer.victims_with_disabilities}</td>
                    </tr>
                    <tr>
                        <td>Victims with Limited English Proficiency</td>
                        <td>{this.props.state.getPersonReducer.limited_english}</td>
                    </tr>
                    </tbody>
                </table>
            </section>
            
            
            </div>
           
            </div>
        )
    }
}


export default connect(mapStateToProps)(CountyReport);