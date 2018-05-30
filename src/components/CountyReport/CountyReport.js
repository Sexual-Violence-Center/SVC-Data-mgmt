import React, { Component } from 'react';
import { connect } from 'react-redux';
import { USER_ACTIONS } from '../../redux/actions/userActions';
// import Calendar from 'react-calendar'
// import Calendar from 'rc-calendar'
import AdminNav from '../Nav/AdminNav/AdminNav';


const mapStateToProps = state => ({
    user: state.user,
    county: state.getCountyReducer,
    state
});

class CountyReport extends Component{ 
    constructor(){
        super();
        this.state={
            startDate:'',
            endDate:'',
            county:'',
            service_location: ''
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
            type: 'GET_PERSON_DATA_COUNTY', 
            payload: this.state
        })
    }
    print = () => {
        console.log('print button clicked');
        window.print();
    }

    componentDidMount () {
        
        this.props.dispatch({type: USER_ACTIONS.FETCH_USER});
        this.props.dispatch({ type:'GET_PERSON_DATA_COUNTY', payload: {county: 'Hennepin', startDate: '1900-01-01', endDate: '2020-01-01'}});
        console.log(this.props.state.getCountyReducer)
    }

    render () {
        return (
            <div className="federalReport">
            <AdminNav />
            <div style={{float: "right"}}>
            <h2>County Report:</h2>
                Start Date:
                <input type="date" name="startDate" value={this.state.startDate} onChange={this.handleChangeFor}/>
                End Date:
                <input type="date" name="endDate" value={this.state.endDate} onChange={this.handleChangeFor} />
                County:
                <select name="county" value={this.state.county} onChange={this.handleChangeFor}>
                <option>Select One</option>
                <option value="Hennepin">Hennepin</option>
                <option value="Scott">Scott</option>
                <option value="Carver">Carver</option>
                <option value="Other">Other</option>
                </select>
                <button onClick={this.submit}>go</button>  
                <button onClick={this.print}>Print</button>
            <div className="dropdown">
            <section className="total">
                <h4>Hennepin County residents who received services during the reporting period</h4>
                <table className="countyTable">
                <thead>
                    <tr>
                        <th>Types of Individuals</th>
                        <th>Number</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Total:</td>
                        <td>{this.props.state.getCountyReducer.total_clients_served}</td>
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
                        <td>{this.props.state.getCountyReducer.new_victim}</td>
                    </tr>
                    <tr>
                        <td>Total Clients Served in Advocacy Program</td>
                        <td>{this.props.state.getCountyReducer.new_victim}</td>
                    </tr>
                    <tr>
                        <td>Total Clients Served in Individual Counseling Program</td>
                        <td>{this.props.state.getCountyReducer.total_clients_individual_counseling}</td>
                    </tr>
                    <tr>
                        <td>Total Clients Served in Group Counseling Program</td>
                        <td>{this.props.state.getCountyReducer.total_clients_group_counseling}</td>
                    </tr>
                    <tr>
                        <td>Location of Service</td>
                        <td><input type="text" name="service_location" value={this.state.service_location} onChange={this.handleChangeFor}/></td>
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
                        <td>{this.props.state.getCountyReducer.amerIndAlaskaNative}</td>
                    </tr>
                    <tr>
                        <td>Adult Secondary Victim/Survivor</td>
                        <td>{this.props.state.getCountyReducer.victim_ethnicity_asian}</td>
                    </tr>
                    <tr>
                        <td>Youth Primary Victim/Survivor</td>
                        <td>{this.props.state.getCountyReducer.africanAmerican}</td>
                    </tr>
                    <tr>
                        <td>Youth Secondary Victim/Survivor</td>
                        <td>{this.props.state.getCountyReducer.hispanicOrLatino}</td>
                    </tr>
                    </tbody>
                </table>
            </section>
            <section className="gender">
                <h4>Hennepin County Zip Code Totals</h4>
                <table className="countyTable">
                <thead>
                    <tr>
                        <th>Zip Code</th>
                        <th>Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>55011</td>
                        <td>{this.props.state.getCountyReducer.victim_zipcode_55111}</td>
                    </tr>
                    <tr>
                        <td>55305</td>
                        <td>{this.props.state.getCountyReducer.victim_zipcode_55305}</td>
                    </tr>
                    <tr>
                        <td>55311</td>
                        <td>{this.props.state.getCountyReducer.victim_zipcode_55311}</td>
                    </tr>
                    <tr>
                        <td>55316</td>
                        <td>{this.props.state.getCountyReducer.victim_zipcode_55316}</td>
                    </tr>
                    <tr>
                        <td>55317</td>
                        <td>{this.props.state.getCountyReducer.victim_zipcode_55317}</td>
                    </tr>
                    <tr>
                        <td>55327</td>
                        <td>{this.props.state.getCountyReducer.victim_zipcode_55327}</td>
                    </tr>
                    <tr>
                        <td>55328</td>
                        <td>{this.props.state.getCountyReducer.victim_zipcode_55328}</td>
                    </tr>
                    <tr>
                        <td>55331</td>
                        <td>{this.props.state.getCountyReducer.victim_zipcode_55331}</td>
                    </tr>
                    <tr>
                        <td>55340</td>
                        <td>{this.props.state.getCountyReducer.victim_zipcode_55340}</td>
                    </tr>
                    <tr>
                        <td>55341</td>
                        <td>{this.props.state.getCountyReducer.victim_zipcode_55341}</td>
                    </tr>
                    <tr>
                        <td>55343</td>
                        <td>{this.props.state.getCountyReducer.victim_zipcode_55343}</td>
                    </tr>
                    <tr>
                        <td>55344</td>
                        <td>{this.props.state.getCountyReducer.victim_zipcode_55344}</td>
                    </tr>
                    <tr>
                        <td>55345</td>
                        <td>{this.props.state.getCountyReducer.victim_zipcode_55345}</td>
                    </tr>
                    <tr>
                        <td>55346</td>
                        <td>{this.props.state.getCountyReducer.victim_zipcode_55346}</td>
                    </tr>
                    <tr>
                        <td>55347</td>
                        <td>{this.props.state.getCountyReducer.victim_zipcode_55347}</td>
                    </tr>
                    <tr>
                        <td>55356</td>
                        <td>{this.props.state.getCountyReducer.victim_zipcode_55356}</td>
                    </tr>
                    <tr>
                        <td>55357</td>
                        <td>{this.props.state.getCountyReducer.victim_zipcode_55357}</td>
                    </tr>
                    <tr>
                        <td>55359</td>
                        <td>{this.props.state.getCountyReducer.victim_zipcode_55359}</td>
                    </tr>
                    <tr>
                        <td>55361</td>
                        <td>{this.props.state.getCountyReducer.victim_zipcode_55361}</td>
                    </tr>
                    <tr>
                        <td>55364</td>
                        <td>{this.props.state.getCountyReducer.victim_zipcode_55364}</td>
                    </tr>
                    <tr>
                        <td>55369</td>
                        <td>{this.props.state.getCountyReducer.victim_zipcode_55369}</td>
                    </tr>
                    <tr>
                        <td>55373</td>
                        <td>{this.props.state.getCountyReducer.victim_zipcode_55373}</td>
                    </tr>
                    <tr>
                        <td>55374</td>
                        <td>{this.props.state.getCountyReducer.victim_zipcode_55374}</td>
                    </tr>
                    <tr>
                        <td>55375</td>
                        <td>{this.props.state.getCountyReducer.victim_zipcode_55375}</td>
                    </tr>
                    <tr>
                        <td>55384</td>
                        <td>{this.props.state.getCountyReducer.victim_zipcode_55384}</td>
                    </tr>
                    <tr>
                        <td>55387</td>
                        <td>{this.props.state.getCountyReducer.victim_zipcode_55387}</td>
                    </tr>
                    <tr>
                        <td>55388</td>
                        <td>{this.props.state.getCountyReducer.victim_zipcode_55388}</td>
                    </tr>
                    <tr>
                        <td>55391</td>
                        <td>{this.props.state.getCountyReducer.victim_zipcode_55391}</td>
                    </tr>
                    <tr>
                        <td>55392</td>
                        <td>{this.props.state.getCountyReducer.victim_zipcode_55392}</td>
                    </tr>
                    <tr>
                        <td>55401</td>
                        <td>{this.props.state.getCountyReducer.victim_zipcode_55401}</td>
                    </tr>
                    <tr>
                        <td>55402</td>
                        <td>{this.props.state.getCountyReducer.victim_zipcode_55402}</td>
                    </tr>
                    <tr>
                        <td>55403</td>
                        <td>{this.props.state.getCountyReducer.victim_zipcode_55403}</td>
                    </tr>
                    <tr>
                        <td>55404</td>
                        <td>{this.props.state.getCountyReducer.victim_zipcode_55404}</td>
                    </tr>
                    <tr>
                        <td>55405</td>
                        <td>{this.props.state.getCountyReducer.victim_zipcode_55405}</td>
                    </tr>
                    <tr>
                        <td>55406</td>
                        <td>{this.props.state.getCountyReducer.victim_zipcode_55406}</td>
                    </tr>
                    <tr>
                        <td>55407</td>
                        <td>{this.props.state.getCountyReducer.victim_zipcode_55407}</td>
                    </tr>
                    <tr>
                        <td>55408</td>
                        <td>{this.props.state.getCountyReducer.victim_zipcode_55408}</td>
                    </tr>
                    <tr>
                        <td>55409</td>
                        <td>{this.props.state.getCountyReducer.victim_zipcode_55409}</td>
                    </tr>
                    <tr>
                        <td>55410</td>
                        <td>{this.props.state.getCountyReducer.victim_zipcode_55410}</td>
                    </tr>
                    <tr>
                        <td>55411</td>
                        <td>{this.props.state.getCountyReducer.victim_zipcode_55411}</td>
                    </tr>
                    <tr>
                        <td>55412</td>
                        <td>{this.props.state.getCountyReducer.victim_zipcode_55412}</td>
                    </tr>
                    <tr>
                        <td>55413</td>
                        <td>{this.props.state.getCountyReducer.victim_zipcode_55413}</td>
                    </tr>
                    <tr>
                        <td>55414</td>
                        <td>{this.props.state.getCountyReducer.victim_zipcode_55414}</td>
                    </tr>
                    <tr>
                        <td>55415</td>
                        <td>{this.props.state.getCountyReducer.victim_zipcode_55415}</td>
                    </tr>
                    <tr>
                        <td>55416</td>
                        <td>{this.props.state.getCountyReducer.victim_zipcode_55416}</td>
                    </tr>
                    <tr>
                        <td>55417</td>
                        <td>{this.props.state.getCountyReducer.victim_zipcode_55417}</td>
                    </tr>
                    <tr>
                        <td>55418</td>
                        <td>{this.props.state.getCountyReducer.victim_zipcode_55418}</td>
                    </tr>
                    <tr>
                        <td>55419</td>
                        <td>{this.props.state.getCountyReducer.victim_zipcode_55419}</td>
                    </tr>
                    <tr>
                        <td>55420</td>
                        <td>{this.props.state.getCountyReducer.victim_zipcode_55420}</td>
                    </tr>
                    <tr>
                        <td>55422</td>
                        <td>{this.props.state.getCountyReducer.victim_zipcode_55422}</td>
                    </tr>
                    <tr>
                        <td>55423</td>
                        <td>{this.props.state.getCountyReducer.victim_zipcode_55423}</td>
                    </tr>
                    <tr>
                        <td>55424</td>
                        <td>{this.props.state.getCountyReducer.victim_zipcode_55424}</td>
                    </tr>
                    <tr>
                        <td>55425</td>
                        <td>{this.props.state.getCountyReducer.victim_zipcode_55425}</td>
                    </tr>
                    <tr>
                        <td>55426</td>
                        <td>{this.props.state.getCountyReducer.victim_zipcode_55426}</td>
                    </tr>
                    <tr>
                        <td>55427</td>
                        <td>{this.props.state.getCountyReducer.victim_zipcode_55427}</td>
                    </tr>
                    <tr>
                        <td>55428</td>
                        <td>{this.props.state.getCountyReducer.victim_zipcode_55428}</td>
                    </tr>
                    <tr>
                        <td>55429</td>
                        <td>{this.props.state.getCountyReducer.victim_zipcode_55429}</td>
                    </tr>
                    <tr>
                        <td>55430</td>
                        <td>{this.props.state.getCountyReducer.victim_zipcode_55430}</td>
                    </tr>
                    <tr>
                        <td>55431</td>
                        <td>{this.props.state.getCountyReducer.victim_zipcode_55431}</td>
                    </tr>
                    <tr>
                        <td>55435</td>
                        <td>{this.props.state.getCountyReducer.victim_zipcode_55435}</td>
                    </tr>
                    <tr>
                        <td>55436</td>
                        <td>{this.props.state.getCountyReducer.victim_zipcode_55436}</td>
                    </tr>
                    <tr>
                        <td>55437</td>
                        <td>{this.props.state.getCountyReducer.victim_zipcode_55437}</td>
                    </tr>
                    <tr>
                        <td>55438</td>
                        <td>{this.props.state.getCountyReducer.victim_zipcode_55438}</td>
                    </tr>
                    <tr>
                        <td>55439</td>
                        <td>{this.props.state.getCountyReducer.victim_zipcode_55439}</td>
                    </tr>
                    <tr>
                        <td>55441</td>
                        <td>{this.props.state.getCountyReducer.victim_zipcode_55441}</td>
                    </tr>
                    <tr>
                        <td>55442</td>
                        <td>{this.props.state.getCountyReducer.victim_zipcode_55442}</td>
                    </tr>
                    <tr>
                        <td>55443</td>
                        <td>{this.props.state.getCountyReducer.victim_zipcode_55443}</td>
                    </tr>
                    <tr>
                        <td>55444</td>
                        <td>{this.props.state.getCountyReducer.victim_zipcode_55444}</td>
                    </tr>
                    <tr>
                        <td>55445</td>
                        <td>{this.props.state.getCountyReducer.victim_zipcode_55445}</td>
                    </tr>
                    <tr>
                        <td>55446</td>
                        <td>{this.props.state.getCountyReducer.victim_zipcode_55446}</td>
                    </tr>
                    <tr>
                        <td>55447</td>
                        <td>{this.props.state.getCountyReducer.victim_zipcode_55447}</td>
                    </tr>
                    <tr>
                        <td>55450</td>
                        <td>{this.props.state.getCountyReducer.victim_zipcode_55450}</td>
                    </tr>
                    <tr>
                        <td>55454</td>
                        <td>{this.props.state.getCountyReducer.victim_zipcode_55454}</td>
                    </tr>
                    <tr>
                        <td>55455</td>
                        <td>{this.props.state.getCountyReducer.victim_zipcode_55455}</td>
                    </tr>
                    <tr>
                        <td>Other</td>
                        <td>{this.props.state.getCountyReducer.victim_zipcode_other}</td>
                    </tr>
                    <tr>
                        <td>Unknown</td>
                        <td>{this.props.state.getCountyReducer.victim_zipcode_unkown}</td>
                    </tr>
                    <tr>
                        <td>Total:</td>
                        <td>{this.props.state.getCountyReducer.victim_zipcode_total}</td>
                    </tr>
                    </tbody>
                </table>
            </section>
            <section className="Age">
                <h4>Demographics: Age</h4>
                <table className="countyTable">
                <thead>
                    <tr>
                        <th>Age Range</th>
                        <th>Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>0 - 18</td>
                        <td>{this.props.state.getCountyReducer.victim_age_zero_to_eightteen}</td>
                    </tr>
                    <tr>
                        <td>19 - 50</td>
                        <td>{this.props.state.getCountyReducer.victim_age_nineteen_to_fifty}</td>
                    </tr>
                    <tr>
                        <td>50+</td>
                        <td>{this.props.state.getCountyReducer.victim_age_over_fifty}</td>
                    </tr>
                    <tr>
                        <td>Not Reported</td>
                        <td>{this.props.state.getCountyReducer.victim_age_unknown}</td>
                    </tr>
                    </tbody>
                </table>
            </section>
            <section className="gender">
                <h4>Demographics: Gender Identity</h4>
                <table className="countyTable">
                <thead>
                    <tr>
                        <th>Gender Identity</th>
                        <th>Number</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Male</td>
                        <td>{this.props.state.getCountyReducer.victim_gender_male}</td>
                    </tr>
                    <tr>
                        <td>Female</td>
                        <td>{this.props.state.getCountyReducer.victim_gender_female}</td>
                    </tr>
                    <tr>
                        <td>Transgender</td>
                        <td>{this.props.state.getCountyReducer.victim_gender_transgender}</td>
                    </tr>
                    <tr>
                        <td>Unknown</td>
                        <td>{this.props.state.getCountyReducer.victim_gender_unknown}</td>
                    </tr>
                    </tbody>
                </table>
            </section>
            <section className="race">
                <h4>Demographics: Race/Ethnicity</h4>
                <table className="countyTable">
                <thead>
                    <tr>
                        <th>Race/Ethnicity</th>
                        <th>Primary</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>American Indian or Alaskan Native</td>
                        <td>{this.props.state.getCountyReducer.amerIndAlaskaNative}</td>
                    </tr>
                    <tr>
                        <td>Asian</td>
                        <td>{this.props.state.getCountyReducer.victim_ethnicity_asian}</td>
                    </tr>
                    <tr>
                        <td>Black or African American</td>
                        <td>{this.props.state.getCountyReducer.africanAmerican}</td>
                    </tr>
                    <tr>
                        <td>Hispanic or Latino</td>
                        <td>{this.props.state.getCountyReducer.hispanicOrLatino}</td>
                    </tr>
                    <tr>
                        <td>Native Hawaiian or Other Pacific Islander</td>
                        <td>{this.props.state.getCountyReducer.pacificIslanderHawaiian}</td>
                    </tr>
                    <tr>
                        <td>White Non-Latino or Caucasian</td>
                        <td>{this.props.state.getCountyReducer.white}</td>
                    </tr>
                    <tr>
                        <td>Other Race</td>
                        <td>{this.props.state.getCountyReducer.other}</td>
                    </tr>
                    <tr>
                        <td>Multiple Races</td>
                        <td>{this.props.state.getCountyReducer.multiple_races}</td>
                    </tr>
                    <tr>
                        <td>Not Reported</td>
                        <td>{this.props.state.getCountyReducer.not_reported}</td>
                    </tr>
                    <tr>
                        <td>Total Ethnicity:</td>
                        <td>{this.props.state.getCountyReducer.total_ethnicity}</td>
                    </tr>
                    </tbody>
                </table>
            </section>
            
            <section className="victimization">
                <h4>Types of Victimization</h4>
                <table className="countyTable">
                <thead>
                    <tr>
                        <th>Victimization Types</th>
                        <th>Number</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Adult Sexual Assault</td>
                        <td>{this.props.state.getCountyReducer.violence_adult_sexual}</td>
                    </tr>
                    <tr>
                        <td>Adult Sexually Abused/Assaulted as Children Total</td>
                        <td>{this.props.state.getCountyReducer.violence_adult_when_child_total}</td>
                    </tr>
                            <tr>
                                <td>Adult Sexually Abused/Assaulted as Children by Family</td>
                                <td>{this.props.state.getCountyReducer.violence_adult_when_child_by_family}</td>
                            </tr>
                            <tr>
                                <td>Adult Sexually Abused/Assaulted as Children by Other</td>
                                <td>{this.props.state.getCountyReducer.violence_adult_when_child_by_other}</td>
                            </tr>
                    <tr>
                        <td>Bullying</td>
                        <td>{this.props.state.getCountyReducer.violence_bullying}</td>
                    </tr>
                    <tr>
                        <td>Child Pornography</td>
                        <td>{this.props.state.getCountyReducer.violence_child_pornography}</td>
                    </tr>
                    <tr>
                        <td>Child Sexual Abuse/Assault Total</td>
                        <td>{this.props.state.getCountyReducer.violence_minor_total}</td>
                    </tr>
                            <tr>
                                <td>Child Sexual Abuse/Assault by Family</td>
                                <td>{this.props.state.getCountyReducer.violence_minor_by_family}</td>
                            </tr>
                            <tr>
                                <td>Child Sexual Abuse/Assault by Other</td>
                                <td>{this.props.state.getCountyReducer.violence_minor_by_other}</td>
                            </tr>
                    <tr>
                        <td>Domestic And/Or Family Violence</td>
                        <td>{this.props.state.getCountyReducer.violence_domestic}</td>
                    </tr>
                    <tr>
                        <td>Elder Abuse or Neglect</td>
                        <td>{this.props.state.getCountyReducer.violence_elder}</td>
                    </tr>
                    <tr>
                        <td>Human Trafficking: Sex</td>
                        <td>{this.props.state.getCountyReducer.violence_exploitation_trafficking}</td>
                    </tr>
                    <tr>
                        <td>Stalking/Harassment Total</td>
                        <td>{this.props.state.getCountyReducer.violence_stalking_harassment_total}</td>
                    </tr>
                            <tr>
                                <td>Stalking/Harassment - Exposing</td>
                                <td>{this.props.state.getCountyReducer.violence_exposing}</td>
                            </tr>
                            <tr>
                                <td>Stalking/Harassment - Harassment</td>
                                <td>{this.props.state.getCountyReducer.violence_harassment}</td>
                            </tr>
                            <tr>
                                <td>Stalking/Harassment - Internet</td>
                                <td>{this.props.state.getCountyReducer.violence_internet}</td>
                            </tr>
                            <tr>
                                <td>Stalking/Harassment - Phone</td>
                                <td>{this.props.state.getCountyReducer.violence_phone}</td>
                            </tr>
                            <tr>
                                <td>Stalking/Harassment - Stalking</td>
                                <td>{this.props.state.getCountyReducer.violence_stalking}</td>
                            </tr>
                    <tr>
                        <td>Teen Dating Victimization</td>
                        <td>{this.props.state.getCountyReducer.violence_teen_dating}</td>
                    </tr>
                    <tr>
                        <td>Unknown/Pass/Doesn't Know</td>
                        <td>{this.props.state.getCountyReducer.violence_unknown}</td>
                    </tr>
                    <tr>
                        <td>Other</td>
                        <td>{this.props.state.getCountyReducer.violence_other}</td>
                    </tr>
                    </tbody>
                </table>
            </section>
            
            </div>
            </div>
           
            </div>
        )
    }
}


export default connect(mapStateToProps)(CountyReport);