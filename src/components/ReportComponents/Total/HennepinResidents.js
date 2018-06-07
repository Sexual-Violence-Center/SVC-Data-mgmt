import React, { Component } from 'react';
import { connect } from 'react-redux';
import { USER_ACTIONS } from '../../../redux/actions/userActions';

const mapStateToProps = state => ({
    user: state.user,
    county: state.getCountyReducer,
    state
});

class HennepinResidents extends Component{ 
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
        )
    }
}
export default connect(mapStateToProps)(HennepinResidents);