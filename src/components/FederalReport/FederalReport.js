import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Calendar from 'react-calendar'
// import Calendar from 'rc-calendar'
import { USER_ACTIONS } from '../../redux/actions/userActions';
// import getPersonReducer from '../../redux/reducers/getPersonReducer';

import AdminNav from '../Nav/AdminNav/AdminNav';


const mapStateToProps = state => ({
    user: state.user,
    person: state.getFederalReducer,
    state,
});


class FederalReport extends Component {
    constructor() {
        super();
        this.state = {
            startDate: '',
            endDate: '',
        }
    }

    handleChangeFor = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });

    }
    submit = () => {
        this.props.dispatch({
            type: 'GET_PERSON_DATA',
            payload: this.state
        })
    }

    componentDidMount() {

        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
        console.log(this.props.state.getPersonReducer)
    }

    render() {
        return (
            <div className="federalReport">
            <AdminNav />
            <h2> Select a date range for the Federal Report:</h2>
            
            Start Date:
                <input type="date" name="startDate" value={this.state.startDate} onChange={this.handleChangeFor}/>
                End Date:
                <input type="date" name="endDate" value={this.state.endDate} onChange={this.handleChangeFor}/>
            
                <button onClick={this.submit}>go</button>  
                <button onClick={this.print}>Print</button>
            <div className="dropdown">
            <section className="total">
                <h4>Individuals who received services during the reporting period</h4>
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
                        <td>{this.props.state.getFederalReducer.total_victims}</td>
                    </tr>
                    </tbody>
                </table>
            </section>
            <section className="new">
                <h4>New individuals who received services during the reporting period</h4>
                <table className="federalTable">
                <thead>
                    <tr>
                        <th>Types of Individuals</th>
                        <th>Number</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>New Individuals</td>
                        <td>{this.props.state.getFederalReducer.new_victim}</td>
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
                        <td>{this.props.state.getFederalReducer.Native_American}</td>
                    </tr>
                    <tr>
                        <td>Asian</td>
                        <td>{this.props.state.getFederalReducer.victim_ethnicity_asian}</td>
                    </tr>
                    <tr>
                        <td>Black or African American</td>
                        <td>{this.props.state.getFederalReducer.africanAmerican}</td>
                    </tr>
                    <tr>
                        <td>Hispanic or Latino</td>
                        <td>{this.props.state.getFederalReducer.hispanicOrLatino}</td>
                    </tr>
                    <tr>
                        <td>Natice Hawaiian or Other Pacific Islander</td>
                        <td>{this.props.state.getFederalReducer.pacificIslanderHawaiian}</td>
                    </tr>
                    <tr>
                        <td>White Non-Latino or Caucasian</td>
                        <td>{this.props.state.getFederalReducer.white}</td>
                    </tr>
                    <tr>
                        <td>Other Race</td>
                        <td>{this.props.state.getFederalReducer.Other}</td>
                    </tr>
                    <tr>
                        <td>Multiple Races</td>
                        <td>{this.props.state.getFederalReducer.multiple_races}</td>
                    </tr>
                    <tr>
                        <td>Not Reported</td>
                        <td>{this.props.state.getFederalReducer.not_reported}</td>
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
                        <td>{this.props.state.getFederalReducer.victim_gender_male}</td>
                    </tr>
                    <tr>
                        <td>Female</td>
                        <td>{this.props.state.getFederalReducer.victim_gender_female}</td>
                    </tr>
                    <tr>
                        <td>Non-Binary</td>
                        <td>{this.props.state.getFederalReducer.victim_gender_non_binary}</td>
                    </tr>
                    <tr>
                        <td>Other</td>
                        <td>{this.props.state.getFederalReducer.victim_gender_other}</td>
                    </tr>
                    <tr>
                        <td>Not Reported</td>
                        <td>{this.props.state.getFederalReducer.victim_gender_unknown}</td>
                    </tr>
                    <tr>
                        <td>Total:</td>
                        <td>{this.props.state.getFederalReducer.total_gender_count}</td>
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
                        <th>Number</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>0-12</td>
                        <td>{this.props.state.getFederalReducer.victim_age_zero_to_twelve}</td>
                    </tr>
                    <tr>
                        <td>13-17</td>
                        <td>{this.props.state.getFederalReducer.victim_age_thirteen_to_seventeen}</td>
                    </tr>
                    <tr>
                        <td>18-24</td>
                        <td>{this.props.state.getFederalReducer.victim_age_eighteen_to_twentyfour}</td>
                    </tr>
                    <tr>
                        <td>25-59</td>
                        <td>{this.props.state.getFederalReducer.victim_age_twentyfive_to_fiftynine}</td>
                    </tr>
                    <tr>
                        <td>60+</td>
                        <td>{this.props.state.getFederalReducer.victim_age_sixty_and_older}</td>
                    </tr>
                    <tr>
                        <td>Not Reported</td>
                        <td>{this.props.state.getFederalReducer.victim_age_unknown}</td>
                    </tr>
                    <tr>
                        <td>Total:</td>
                        <td>{this.props.state.getFederalReducer.total_age_count}</td>
                    </tr>
                    </tbody>
                </table>
            </section>
            <section className="victimization">
                <h4>Types of Victimization: total number during the reporting period</h4>
                <table className="federalTable">
                <thead>
                    <tr>
                        <th>Victimization Types</th>
                        <th>Number</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Adult Sexual Assault</td>
                        <td>{this.props.state.getFederalReducer.violence_adult_sexual}</td>
                    </tr>
                    <tr>
                        <td>Adult Sexually Abused/Assaulted as Children Total</td>
                        <td>{this.props.state.getFederalReducer.violence_adult_when_child_total}</td>
                    </tr>
                            <tr>
                                <td>Adult Sexually Abused/Assaulted as Children by Family</td>
                                <td>{this.props.state.getFederalReducer.violence_adult_when_child_by_family}</td>
                            </tr>
                            <tr>
                                <td>Adult Sexually Abused/Assaulted as Children by Other</td>
                                <td>{this.props.state.getFederalReducer.violence_adult_when_child_by_other}</td>
                            </tr>
                    <tr>
                        <td>Bullying</td>
                        <td>{this.props.state.getFederalReducer.violence_bullying}</td>
                    </tr>
                    <tr>
                        <td>Child Pornography</td>
                        <td>{this.props.state.getFederalReducer.violence_child_pornography}</td>
                    </tr>
                    <tr>
                        <td>Child Sexual Abuse/Assault Total</td>
                        <td>{this.props.state.getFederalReducer.violence_minor_total}</td>
                    </tr>
                            <tr>
                                <td>Child Sexual Abuse/Assault by Family</td>
                                <td>{this.props.state.getFederalReducer.violence_minor_by_family}</td>
                            </tr>
                            <tr>
                                <td>Child Sexual Abuse/Assault by Other</td>
                                <td>{this.props.state.getFederalReducer.violence_minor_by_other}</td>
                            </tr>
                    <tr>
                        <td>Domestic And/Or Family Violence</td>
                        <td>{this.props.state.getFederalReducer.violence_domestic}</td>
                    </tr>
                    <tr>
                        <td>Elder Abuse or Neglect</td>
                        <td>{this.props.state.getFederalReducer.violence_elder}</td>
                    </tr>
                    <tr>
                        <td>Human Trafficking: Sex</td>
                        <td>{this.props.state.getFederalReducer.violence_exploitation_trafficking}</td>
                    </tr>
                    <tr>
                        <td>Stalking/Harassment Total</td>
                        <td>{this.props.state.getFederalReducer.violence_stalking_harassment_total}</td>
                    </tr>
                            <tr>
                                <td>Stalking/Harassment - Exposing</td>
                                <td>{this.props.state.getFederalReducer.violence_exposing}</td>
                            </tr>
                            <tr>
                                <td>Stalking/Harassment - Harassment</td>
                                <td>{this.props.state.getFederalReducer.violence_harassment}</td>
                            </tr>
                            <tr>
                                <td>Stalking/Harassment - Internet</td>
                                <td>{this.props.state.getFederalReducer.violence_internet}</td>
                            </tr>
                            <tr>
                                <td>Stalking/Harassment - Phone</td>
                                <td>{this.props.state.getFederalReducer.violence_phone}</td>
                            </tr>
                            <tr>
                                <td>Stalking/Harassment - Stalking</td>
                                <td>{this.props.state.getFederalReducer.violence_stalking}</td>
                            </tr>
                    <tr>
                        <td>Teen Dating Victimization</td>
                        <td>{this.props.state.getFederalReducer.violence_teen_dating}</td>
                    </tr>
                    <tr>
                        <td>Unknown/Pass/Doesn't Know</td>
                        <td>{this.props.state.getFederalReducer.violence_unknown}</td>
                    </tr>
                    <tr>
                        <td>Other</td>
                        <td>{this.props.state.getFederalReducer.violence_other}</td>
                    </tr>
                    <tr>
                        <td>Multiple Types of Violence</td>
                        <td>{this.props.state.getFederalReducer.victim_multiple_types_violence}</td>
                    </tr>
                    </tbody>
                </table>
            </section>
            
            <section className="total">
                <h4>Types of Victimization: Special classification of individuals</h4>
                <table className="federalTable">
                <thead>
                    <tr>
                        <th>Types of Individuals</th>
                        <th>Number</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Deaf/Hard of Hearing</td>
                        <td>{this.props.state.getFederalReducer.disability_deaf}</td>
                    </tr>
                    <tr>
                        <td>Homeless</td>
                        <td>{this.props.state.getFederalReducer.homeless}</td>
                    </tr>
                    <tr>
                        <td>Immigrants/Refugees/Asylum Seekers</td>
                        <td>{this.props.state.getFederalReducer.victim_immigrant}</td>
                    </tr>
                    <tr>
                        <td>LGBTQ</td>
                        <td>{this.props.state.getFederalReducer.lgbtq}</td>
                    </tr>
                    <tr>
                        <td>Veterans</td>
                        <td>{this.props.state.getFederalReducer.veteran}</td>
                    </tr>
                    <tr>
                        <td>Victims with Disabilities: Cognitive/Physical/Mental</td>
                        <td>{this.props.state.getFederalReducer.victims_with_disabilities}</td>
                    </tr>
                    <tr>
                        <td>Victims with Limited English Proficiency</td>
                        <td>{this.props.state.getFederalReducer.limited_english}</td>
                    </tr>
                    </tbody>
                </table>
            </section>
            <h1> Direct Services</h1>
            <section className="assisted">
                <h4>Individuals assisted with a victim compensation application during the reporting period</h4>
                <table className="federalTable">
                <thead>
                    <tr>
                        <th>Types of Individuals</th>
                        <th>Number</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Individuals Assisted</td>
                        <td>{this.props.state.getFederalReducer.assisted_with_victim_compensation}</td>
                    </tr>
                    </tbody>
                </table>
            </section>
            <section className="totalServices">
                <h4>Total services provided during the reporting period</h4>
                <table className="federalTable">
                <thead>
                    <tr>
                        <th>Services</th>
                        <th>Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Information/Referral (A)</td>
                        <td>{this.props.state.getFederalReducer.total_A_information_referral}</td>
                    </tr>
                    <tr>
                        <td>Personal Advocacy/Accompaniment (B)</td>
                        <td>{this.props.state.getFederalReducer.total_B_personal_advocacy_accompaniment}</td>
                    </tr>
                    <tr>
                        <td>Emotional Support or Safety Services (C)</td>
                        <td>{this.props.state.getFederalReducer.total_C_Emotional_support_safety_service}</td>
                    </tr>
                    <tr>
                        <td>Criminal/Civil Justice System (E)</td>
                        <td>{this.props.state.getFederalReducer.total_E_criminal_civil_justice_system}</td>
                    </tr>
                    </tbody>
                </table>
            </section>
            <section className="informationReferral">
                <h4>(A) Information & Referral</h4>
                <table className="federalTable">
                <thead>
                    <tr>
                        <th>Service Details</th>
                        <th>Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>(A1) Information about the criminal justice proces</td>
                        <td>{this.props.state.getFederalReducer.info_criminal_justice_process}</td>
                    </tr>
                    <tr>
                        <td>(A2) Information about victims rights</td>
                        <td>{this.props.state.getFederalReducer.info_victims_rights}</td>
                    </tr>
                    <tr>
                        <td>(A3) Referral to other victim support programs</td>
                        <td>{this.props.state.getFederalReducer.referral_victim_support}</td>
                    </tr>
                    <tr>
                        <td>(A4) Referral to other services, supports, resources</td>
                        <td>{this.props.state.getFederalReducer.referral_other_services}</td>
                    </tr>
                    </tbody>
                </table>
            </section>
            <section className="">
                <h4>(B) Personal Advocacy/Accompaniment</h4>
                <table className="federalTable">
                <thead>
                    <tr>
                        <th>Service Details</th>
                        <th>Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>(B1) Victim Advocacy/Accompaniment to Emergency Medical Care</td>
                        <td>{this.props.state.getFederalReducer.emergency_med_care}</td>
                    </tr>
                    <tr>
                        <td>(B2) Victim Advocacy/Accompaniment to Medical Forensic Exam</td>
                        <td>{this.props.state.getFederalReducer.forensic_exam}</td>
                    </tr>
                    <tr>
                        <td>(B3) Law Enforcement Interview Advocacy/Accompaniment</td>
                        <td>{this.props.state.getFederalReducer.law_enforcement_interview}</td>
                    </tr>
                    <tr>
                        <td>(B6) Immigration Assistance</td>
                        <td>{this.props.state.getFederalReducer.legal_immigration}</td>
                    </tr>
                    <tr>
                        <td>(B7) Intervention with Employer, Creditor, Landlord, or Academic Institution</td>
                        <td>{this.props.state.getFederalReducer.legal_intervention}</td>
                    </tr>
                    <tr>
                        <td>(B9) Transportation Assistance</td>
                        <td>{this.props.state.getFederalReducer.transportation}</td>
                    </tr>
                    </tbody>
                </table>
            </section>
            <section className="emotionalSupport">
                <h4>(C) Emotional Support of Safety Services: Total services provided during the reporting period</h4>
                <table className="federalTable">
                <thead>
                    <tr>
                        <th>Service Details</th>
                        <th>Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>(C1) Crisis Intervention</td>
                        <td>{this.props.state.getFederalReducer.crisis_intervention}</td>
                    </tr>
                    <tr>
                        <td>(C2) Hotline/Crisis Counseling</td>
                        <td>{this.props.state.getFederalReducer.hotline_intervention}</td>
                    </tr>
                    <tr>
                        <td>(C4) Individual Counseling</td>
                        <td>{this.props.state.getFederalReducer.crisis_counseling_individual}</td>
                    </tr>
                    <tr>
                        <td>(C5) Support Groups</td>
                        <td>{this.props.state.getFederalReducer.crisis_counseling_group}</td>
                    </tr>
                    <tr>
                        <td>(C7) Emergency Financial Assistance</td>
                        <td>{this.props.state.getFederalReducer.emergency_financial}</td>
                    </tr>
                    </tbody>
                </table>
            </section>
            <section className="total">
                <h4>(E) Criminal/Civil Justice System Assistance: Total services provided during the reporting period</h4>
                <table className="federalTable">
                <thead>
                    <tr>
                        <th>Service Details</th>
                        <th>Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>(E4) Civil Legal Assistance in Obtaining Protection or Restraining Order</td>
                        <td>{this.props.state.getFederalReducer.ofp_hro}</td>
                    </tr>
                    <tr>
                        <td>(E6) Other Emergency-Justice Related Assistance</td>
                        <td>{this.props.state.getFederalReducer.other_emergency_justice}</td>
                    </tr>
                    <tr>
                        <td>(E7) Immigration Assistance</td>
                        <td>{this.props.state.getFederalReducer.legal_immigration}</td>
                    </tr>
                    <tr>
                        <td>(E8) Prosecution Interview Advocacy/Accompaniment</td>
                        <td>{this.props.state.getFederalReducer.legal_prosecution_related}</td>
                    </tr>
                    <tr>
                        <td>Law Enforcement Interview Advocacy/Accompaniment</td>
                        <td>{this.props.state.getFederalReducer.legal_law_enforcement_interview}</td>
                    </tr>
                    <tr>
                        <td>Criminal Advocacy/Accompaniment</td>
                        <td>{this.props.state.getFederalReducer.legal_court_advocacy}</td>
                    </tr>
                    </tbody>
                </table>
            </section>
            </div>
           
            </div>
        )
    }
}
export default connect(mapStateToProps)(FederalReport);