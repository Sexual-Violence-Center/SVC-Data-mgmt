import React, { Component } from 'react';
import { connect } from 'react-redux';
import { USER_ACTIONS } from '../../../redux/actions/userActions';
import AdminNav from '../../Nav/AdminNav/AdminNav';
//Style
import { Paper, Typography, Card, Button, } from '@material-ui/core';


const mapStateToProps = state => ({
    user: state.user,
    person: state.getFederalReducer,
    state,
});


class TotalVictims extends Component {
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
            <div className="dropdown">
            <section className="total">
                <h4>Individuals who received services during the reporting period</h4>
                <table className="federalTable">
                <thead>
                    <tr>
                        <th>Types of Individuals</th>
                        <th>Number</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Total:</td>
                        <td>{this.props.state.getFederalReducer.total_victims}</td>
                    </tr>
                    </tbody>
                </table>
            </section>
        </div>
        );
    }
}
export default connect(mapStateToProps)(TotalVictims);
