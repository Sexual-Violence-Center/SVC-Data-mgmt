import React, { Component } from 'react';
import { connect } from 'react-redux';
import { USER_ACTIONS } from '../../../redux/actions/userActions';
import AdminNav from '../../Nav/AdminNav/AdminNav';
//Style
import { Paper, Typography, Card, Button } from '@material-ui/core';


const mapStateToProps = state => ({
    user: state.user,
    person: state.getFederalReducer,
    state,
});


class FederalGender extends Component {
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
            <section className="gender">
                <h4>Demographics: Gender Identity</h4>
                <table className="federalTable">
                <thead>
                    <tr>
                        <th>Gender Identity</th>
                        <th>Number</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Male</td>
                        <td>{this.props.state.getFederalReducer.victim_gender_male}</td>
                    </tr>
                    <tr>
                        <td>Female</td>
                        <td>{this.props.state.getFederalReducer.victim_gender_female}</td>
                    </tr>
                    <tr>
                        <td>Non-Binary</td>
                        <td>{this.props.state.getFederalReducer.victim_gender_non_binary}</td>
                    </tr>
                    <tr>
                        <td>Other</td>
                        <td>{this.props.state.getFederalReducer.victim_gender_other}</td>
                    </tr>
                    <tr>
                        <td>Not Reported</td>
                        <td>{this.props.state.getFederalReducer.victim_gender_unknown}</td>
                    </tr>
                    <tr>
                        <td>Total:</td>
                        <td>{this.props.state.getFederalReducer.total_gender_count}</td>
                    </tr>
                    </tbody>
                </table>
            </section>
        );
    }
}
export default connect(mapStateToProps)(FederalGender);
