import React, { Component } from 'react';
import { connect } from 'react-redux';
import { USER_ACTIONS } from '../../redux/actions/userActions';

const mapStateToProps = state => ({
    user: state.user,
    county: state.getCountyReducer,
    state
});

class CountyVictimType extends Component{ 
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
                        <td>{this.props.state.getCountyReducer.adult_primary_victim}</td>
                    </tr>
                    <tr>
                        <td>Adult Secondary Victim/Survivor</td>
                        <td>{this.props.state.getCountyReducer.adult_secondary_victim}</td>
                    </tr>
                    <tr>
                        <td>Youth Primary Victim/Survivor</td>
                        <td>{this.props.state.getCountyReducer.youth_primary_victim}</td>
                    </tr>
                    <tr>
                        <td>Youth Secondary Victim/Survivor</td>
                        <td>{this.props.state.getCountyReducer.youth_secondary_victim}</td>
                    </tr>
                    </tbody>
                </table>
            </section>
        )
    }
}
export default connect(mapStateToProps)(CountyVictimType);