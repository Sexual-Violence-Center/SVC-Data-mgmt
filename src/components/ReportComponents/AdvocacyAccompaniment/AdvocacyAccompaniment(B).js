import React, { Component } from 'react';
import { connect } from 'react-redux';
import { USER_ACTIONS } from '../../../redux/actions/userActions';
import AdminNav from '../../Nav/Nav';
//Style
import { Paper, Typography, Card, Button } from '@material-ui/core';


const mapStateToProps = state => ({
    user: state.user,
    person: state.getFederalReducer,
    state,
});


class AdvocacyAccompaniment extends Component {
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
        );
    }
}
export default connect(mapStateToProps)(AdvocacyAccompaniment);
