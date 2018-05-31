import React, { Component } from 'react';
import { connect } from 'react-redux';
import { USER_ACTIONS } from '../../../redux/actions/userActions';
// import Calendar from 'react-calendar'
// import Calendar from 'rc-calendar'
import AdminNav from '../../Nav/AdminNav/AdminNav';


const mapStateToProps = state => ({
    user: state.user,
    county: state.getCountyReducer,
    state
});

class CountyEthnicity extends Component{ 
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
  
    componentDidMount () {
        
        this.props.dispatch({type: USER_ACTIONS.FETCH_USER});
        console.log(this.props.state.getCountyReducer)
    }
    render () {
        return (
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
        )
    }
}
export default connect(mapStateToProps)(CountyEthnicity);