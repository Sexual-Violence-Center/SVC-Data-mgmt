import React, { Component } from 'react';
import { connect } from 'react-redux';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

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
                <h4>(C) Emotional Support or Safety Services: Total services provided during the reporting period</h4>
                <Table className="federalTable">
                <TableHead>
                    <TableRow>
                        <TableCell>Service Details</TableCell>
                        <TableCell>Total</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    <TableRow>
                        <TableCell>(C1) Crisis Intervention</TableCell>
                        <TableCell>{this.props.state.getFederalReducer.crisis_intervention}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>(C2) Hotline/Crisis Counseling</TableCell>
                        <TableCell>{this.props.state.getFederalReducer.hotline_intervention}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>(C4) Individual Counseling</TableCell>
                        <TableCell>{this.props.state.getFederalReducer.crisis_counseling_individual}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>(C5) Support Groups</TableCell>
                        <TableCell>{this.props.state.getFederalReducer.crisis_counseling_group}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>(C7) Emergency Financial Assistance</TableCell>
                        <TableCell>{this.props.state.getFederalReducer.emergency_financial}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><strong>Total Emotional Support or Safety Services</strong></TableCell>
                        <TableCell>{this.props.state.getFederalReducer.total_C_Emotional_support_safety_service}</TableCell>
                    </TableRow>
                    </TableBody>
                </Table>
            </section>
        );
    }
}
export default connect(mapStateToProps)(EmotionalSupport);
