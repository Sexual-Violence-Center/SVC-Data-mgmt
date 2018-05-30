import React, { Component } from 'react';
import { connect } from 'react-redux';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import AdminNav from '../Nav/AdminNav/AdminNav';
//Style
import { Paper, Typography, Card, Button } from '@material-ui/core';


const mapStateToProps = state => ({
    user: state.user,
    person: state.getFederalReducer,
    state,
});


class TotalServices extends Component {
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
        );
    }
}
export default connect(mapStateToProps)(TotalServices);
