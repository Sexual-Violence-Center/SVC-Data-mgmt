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


class InformationReferral extends Component {
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
            <section className="informationReferral">
                <h4>(A) Information & Referral</h4>
                <table className="federalTable">
                <thead>
                    <tr>
                        <th>Service Details</th>
                        <th>Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>(A1) Information about the criminal justice proces</td>
                        <td>{this.props.state.getFederalReducer.info_criminal_justice_process}</td>
                    </tr>
                    <tr>
                        <td>(A2) Information about victims rights</td>
                        <td>{this.props.state.getFederalReducer.info_victims_rights}</td>
                    </tr>
                    <tr>
                        <td>(A3) Referral to other victim support programs</td>
                        <td>{this.props.state.getFederalReducer.referral_victim_support}</td>
                    </tr>
                    <tr>
                        <td>(A4) Referral to other services, supports, resources</td>
                        <td>{this.props.state.getFederalReducer.referral_other_services}</td>
                    </tr>
                    </tbody>
                </table>
            </section>
        );
    }
}
export default connect(mapStateToProps)(InformationReferral);
