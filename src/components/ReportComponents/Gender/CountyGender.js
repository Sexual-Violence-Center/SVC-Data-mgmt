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

class CountyGender extends Component{ 
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
        )
    }
}
export default connect(mapStateToProps)(CountyGender);