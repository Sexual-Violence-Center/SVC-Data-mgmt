import React, { Component } from 'react';
import { connect } from 'react-redux';
import { USER_ACTIONS } from '../../../redux/actions/userActions';

const mapStateToProps = state => ({
    user: state.user,
    county: state.getCountyReducer,
    state
});

class NewVictimsCounty extends Component{ 
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
        
        this.props.dispatch({
                type: 
                USER_ACTIONS.FETCH_USER
        });
        console.log(this.props.state.getCountyReducer)
    }
    render () {
        return (
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
                    </tbody>
                </table>
            </section>
        )
    }
}
export default connect(mapStateToProps)(NewVictimsCounty);