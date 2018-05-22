import React, { Component } from 'react';
import { connect } from 'react-redux';
import Calendar from 'react-calendar'

const mapStateToProps = state => ({
    user: state.user,
  });

class FederalReport extends Component{
    render () {
        return (
            <div className="federalReport">
            <h2> Select a date range for the Federal Report:</h2>
            <h3>Start Date:<Calendar /></h3>  <h3>End Date:<Calendar /></h3> <button>go</button>  <button>Print</button>
            <div className="dropdown">
            <section classname="total">
                <h4>Individuals who received services during the reporting period</h4>
                <table className="federalTable">
                    <tr>
                        <th>Types of Individuals</th>
                        <th>Number</th>
                    </tr>
                    <tr>
                        <td>Total:</td>
                        <td>#####{this.count}</td>
                    </tr>
                </table>
            </section>
            <section classname="new">
                <h4>NEW individuals who received services during the reporting period</h4>
                <table className="federalTable">
                    <tr>
                        <th>Types of Individuals</th>
                        <th>Number</th>
                    </tr>
                    <tr>
                        <td>New Individuals</td>
                        <td>#####{this.count}</td>
                    </tr>
                </table>
            </section>
            <section classname="race">
                <h4>Demographics: Race/Ethnicity</h4>
                <table className="federalTable">
                    <tr>
                        <th>Race/Ethnicity</th>
                        <th>Primary</th>
                    </tr>
                    <tr>
                        <td>American Indian of Alaskan Native</td>
                        <td>#####{this.count}</td>
                    </tr>
                    <tr>
                        <td>Asian</td>
                        <td>#####{this.count}</td>
                    </tr>
                    <tr>
                        <td>Black or African American</td>
                        <td>#####{this.count}</td>
                    </tr>
                    <tr>
                        <td>Hispanic or Latino</td>
                        <td>#####{this.count}</td>
                    </tr>
                    <tr>
                        <td>Natice Hawaiian or Other Pacific Islander</td>
                        <td>#####{this.count}</td>
                    </tr>
                    <tr>
                        <td>White Non-Latino or Caucasian</td>
                        <td>#####{this.count}</td>
                    </tr>
                    <tr>
                        <td>Other Race</td>
                        <td>#####{this.count}</td>
                    </tr>
                    <tr>
                        <td>Multiple Races</td>
                        <td>#####{this.count}</td>
                    </tr>
                    <tr>
                        <td>Not Reported</td>
                        <td>#####{this.count}</td>
                    </tr>
                </table>
            </section>
            <section classname="gender">
                <h4>Demographics: Gender Identity</h4>
                <table className="federalTable">
                    <tr>
                        <th>Gender Identity</th>
                        <th>Number</th>
                    </tr>
                    <tr>
                        <td>Male</td>
                        <td>#####{this.count}</td>
                    </tr>
                    <tr>
                        <td>Female</td>
                        <td>#####{this.count}</td>
                    </tr>
                    <tr>
                        <td>Non-Binary</td>
                        <td>#####{this.count}</td>
                    </tr>
                    <tr>
                        <td>Other</td>
                        <td>#####{this.count}</td>
                    </tr>
                    <tr>
                        <td>Not Reported</td>
                        <td>#####{this.count}</td>
                    </tr>
                    <tr>
                        <td>Total:</td>
                        <td>#####{this.count}</td>
                    </tr>
                </table>
            </section>
            <section classname="Age">
                <h4>Demographics: Age</h4>
                <table className="federalTable">
                    <tr>
                        <th>Age Range</th>
                        <th>Number</th>
                    </tr>
                    <tr>
                        <td>0-12</td>
                        <td>#####{this.count}</td>
                    </tr>
                    <tr>
                        <td>13-17</td>
                        <td>#####{this.count}</td>
                    </tr>
                    <tr>
                        <td>18-24</td>
                        <td>#####{this.count}</td>
                    </tr>
                    <tr>
                        <td>25-59</td>
                        <td>#####{this.count}</td>
                    </tr>
                    <tr>
                        <td>60+</td>
                        <td>#####{this.count}</td>
                    </tr>
                    <tr>
                        <td>Not Reported</td>
                        <td>#####{this.count}</td>
                    </tr>
                    <tr>
                        <td>Total:</td>
                        <td>#####{this.count}</td>
                    </tr>
                </table>
            </section>
            <section classname="victimization">
                <h4>Types of Victimization: total number during the reporting period</h4>
                <table className="federalTable">
                    <tr>
                        <th>Victimization Types</th>
                        <th>Number</th>
                    </tr>
                    <tr>
                        <td>Total:</td>
                        <td>#####{this.count}</td>
                    </tr>
                </table>
            </section>
            <section classname="total">
                <h4>Types of Victimization: Special classification of individuals</h4>
                <table className="federalTable">
                    <tr>
                        <th>Types of Individuals</th>
                        <th>Number</th>
                    </tr>
                    <tr>
                        <td>Adult Sexual Assault</td>
                        <td>#####{this.count}</td>
                    </tr>
                    <tr>
                        <td>Adult Sexually Abused/Assaulted as Children Total</td>
                        <td>#####{this.count}</td>
                    </tr>
                            <tr>
                                <td>Adult Sexually Abused/Assaulted as Children by Family</td>
                                <td>#####{this.count}</td>
                            </tr>
                            <tr>
                                <td>Adult Sexually Abused/Assaulted as Children by Other</td>
                                <td>#####{this.count}</td>
                            </tr>
                    <tr>
                        <td>Bullying</td>
                        <td>#####{this.count}</td>
                    </tr>
                    <tr>
                        <td>Child Pornography</td>
                        <td>#####{this.count}</td>
                    </tr>
                    <tr>
                        <td>Child Sexual Abuse/Assault Total</td>
                        <td>#####{this.count}</td>
                    </tr>
                            <tr>
                                <td>Child Sexual Abuse/Assault by Family</td>
                                <td>#####{this.count}</td>
                            </tr>
                            <tr>
                                <td>Child Sexual Abuse/Assault by Other</td>
                                <td>#####{this.count}</td>
                            </tr>
                    <tr>
                        <td>Domestic And/Or Family Violence</td>
                        <td>#####{this.count}</td>
                    </tr>
                    <tr>
                        <td>Elder Abuse or Neglect</td>
                        <td>#####{this.count}</td>
                    </tr>
                    <tr>
                        <td>Human Trafficking: Sex</td>
                        <td>#####{this.count}</td>
                    </tr>
                    <tr>
                        <td>Stalking/Harassment Total</td>
                        <td>#####{this.count}</td>
                    </tr>
                            <tr>
                                <td>Stalking/Harassment - Exposing</td>
                                <td>#####{this.count}</td>
                            </tr>
                            <tr>
                                <td>Stalking/Harassment - Harassment</td>
                                <td>#####{this.count}</td>
                            </tr>
                            <tr>
                                <td>Stalking/Harassment - Internet</td>
                                <td>#####{this.count}</td>
                            </tr>
                            <tr>
                                <td>Stalking/Harassment - Phone</td>
                                <td>#####{this.count}</td>
                            </tr>
                            <tr>
                                <td>Stalking/Harassment - Stalking</td>
                                <td>#####{this.count}</td>
                            </tr>
                    <tr>
                        <td>Teen Dating Victimization</td>
                        <td>#####{this.count}</td>
                    </tr>
                    <tr>
                        <td>Unknown/Pass/Doesn't Know</td>
                        <td>#####{this.count}</td>
                    </tr>
                    <tr>
                        <td>Other</td>
                        <td>#####{this.count}</td>
                    </tr>
                </table>
            </section>
            <h1> Direct Services</h1>
            <section classname="assisted">
                <h4>Individuals assisted with a victim compensation application during the reporting period</h4>
                <table className="federalTable">
                    <tr>
                        <th>Types of Individuals</th>
                        <th>Number</th>
                    </tr>
                    <tr>
                        <td>Individuals Assisted</td>
                        <td>#####{this.count}</td>
                    </tr>
                </table>
            </section>
            <section classname="totalServices">
                <h4>Total services provided during the reporting period</h4>
                <table className="federalTable">
                    <tr>
                        <th>Services</th>
                        <th>Total</th>
                    </tr>
                    <tr>
                        <td>Information/Referral</td>
                        <td>#####{this.count}</td>
                    </tr>
                    <tr>
                        <td>Personal Advocacy/Accompaniment</td>
                        <td>#####{this.count}</td>
                    </tr>
                    <tr>
                        <td>Emotional Support or Safety Services</td>
                        <td>#####{this.count}</td>
                    </tr>
                    <tr>
                        <td>Criminal/Civil Justice System</td>
                        <td>#####{this.count}</td>
                    </tr>
                </table>
            </section>
            <section classname="informationReferral">
                <h4>(A) Information & Referral</h4>
                <table className="federalTable">
                    <tr>
                        <th>Service Details</th>
                        <th>Total</th>
                    </tr>
                    <tr>
                        <td>(A1) Information about the criminal justice proces</td>
                        <td>#####{this.count}</td>
                    </tr>
                    <tr>
                        <td>(A2) Information about victims rights</td>
                        <td>#####{this.count}</td>
                    </tr>
                    <tr>
                        <td>(A3) Referral to other victim support programs</td>
                        <td>#####{this.count}</td>
                    </tr>
                    <tr>
                        <td>(A4) Referral to other services, supports, resources</td>
                        <td>#####{this.count}</td>
                    </tr>
                </table>
            </section>
            <section classname="">
                <h4>(B) Personal Advocacy/Accompaniment</h4>
                <table className="federalTable">
                    <tr>
                        <th>Service Details</th>
                        <th>Total</th>
                    </tr>
                    <tr>
                        <td>(B1) Victim Advocacy/Accompaniment to Emergency Medical Care</td>
                        <td>#####{this.count}</td>
                    </tr>
                    <tr>
                        <td>(B2) Victim Advocacy/Accompaniment to Medical Forensic Exam</td>
                        <td>#####{this.count}</td>
                    </tr>
                    <tr>
                        <td>(B3) Law Enforcement Interview Advocacy/Accompaniment</td>
                        <td>#####{this.count}</td>
                    </tr>
                    <tr>
                        <td>(B6) Immigration Assistance</td>
                        <td>#####{this.count}</td>
                    </tr>
                    <tr>
                        <td>(B7) Intervention with Employer, Creditor, Landlord, or Academic Institution</td>
                        <td>#####{this.count}</td>
                    </tr>
                    <tr>
                        <td>(B9) Transportation Assistance</td>
                        <td>#####{this.count}</td>
                    </tr>
                </table>
            </section>
            <section classname="emotionalSupport">
                <h4>(C) Emotional Support of Safety Services: Total services provided during the reporting period</h4>
                <table className="federalTable">
                    <tr>
                        <th>Service Details</th>
                        <th>Total</th>
                    </tr>
                    <tr>
                        <td>(C1) Crisis Intervention</td>
                        <td>#####{this.count}</td>
                    </tr>
                    <tr>
                        <td>(C2) Hotline/Crisis Counseling</td>
                        <td>#####{this.count}</td>
                    </tr>
                    <tr>
                        <td>(C4) Individual Counseling</td>
                        <td>#####{this.count}</td>
                    </tr>
                    <tr>
                        <td>(C5) Support Groups</td>
                        <td>#####{this.count}</td>
                    </tr>
                    <tr>
                        <td>(C7) Emergency Financial Assistance</td>
                        <td>#####{this.count}</td>
                    </tr>
                    
                </table>
            </section>
            <section classname="total">
                <h4>(E) Criminal/Civil Justice System Assistance: Total services provided during the reporting period</h4>
                <table className="federalTable">
                    <tr>
                        <th>Service Details</th>
                        <th>Total</th>
                    </tr>
                    <tr>
                        <td>(E4) Civil Legal Assistance in Obtaining Protection or Restraining Order</td>
                        <td>#####{this.count}</td>
                    </tr>
                    <tr>
                        <td>(E6) Other Emergency-Justice Related Assistance</td>
                        <td>#####{this.count}</td>
                    </tr>
                    <tr>
                        <td>(E7) Immigration Assistance</td>
                        <td>#####{this.count}</td>
                    </tr>
                    <tr>
                        <td>(E8) Prosecution Interview Advocacy/Accompaniment</td>
                        <td>#####{this.count}</td>
                    </tr>
                    <tr>
                        <td>Law Enforcement Interview Advocacy/Accompaniment</td>
                        <td>#####{this.count}</td>
                    </tr>
                    <tr>
                        <td>Criminal Advocacy/Accompaniment</td>
                        <td>#####{this.count}</td>
                    </tr>
                </table>
            </section>
            </div>
           
            </div>
        )
    }
}
export default connect(mapStateToProps)(FederalReport);