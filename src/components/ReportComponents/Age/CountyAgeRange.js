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

class CountyAgeRange extends Component{ 
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
        console.log(this.props.state.getCountyReducer)
    }
    render () {
        return (
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
        )
    }
}
export default connect(mapStateToProps)(CountyAgeRange);