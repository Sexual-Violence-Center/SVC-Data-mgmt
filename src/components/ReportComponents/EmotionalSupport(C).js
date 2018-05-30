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


class EmotionalSupport extends Component {
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
            <section className="emotionalSupport">
                <h4>(C) Emotional Support of Safety Services: Total services provided during the reporting period</h4>
                <table className="federalTable">
                <thead>
                    <tr>
                        <th>Service Details</th>
                        <th>Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>(C1) Crisis Intervention</td>
                        <td>{this.props.state.getFederalReducer.crisis_intervention}</td>
                    </tr>
                    <tr>
                        <td>(C2) Hotline/Crisis Counseling</td>
                        <td>{this.props.state.getFederalReducer.hotline_intervention}</td>
                    </tr>
                    <tr>
                        <td>(C4) Individual Counseling</td>
                        <td>{this.props.state.getFederalReducer.crisis_counseling_individual}</td>
                    </tr>
                    <tr>
                        <td>(C5) Support Groups</td>
                        <td>{this.props.state.getFederalReducer.crisis_counseling_group}</td>
                    </tr>
                    <tr>
                        <td>(C7) Emergency Financial Assistance</td>
                        <td>{this.props.state.getFederalReducer.emergency_financial}</td>
                    </tr>
                    </tbody>
                </table>
            </section>
        );
    }
}
export default connect(mapStateToProps)(EmotionalSupport);
