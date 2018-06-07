import React, { Component } from 'react';
import { connect } from 'react-redux';
import { USER_ACTIONS } from '../../../redux/actions/userActions';
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
                <Table className="federalTable">
                <TableHead>
                    <TableRow>
                        <TableCell>Service Details</TableCell>
                        <TableCell>Total</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    <TableRow>
                        <TableCell>(B1) Victim Advocacy/Accompaniment to Emergency Medical Care</TableCell>
                        <TableCell>{this.props.state.getFederalReducer.emergency_med_care}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>(B2) Victim Advocacy/Accompaniment to Medical Forensic Exam</TableCell>
                        <TableCell>{this.props.state.getFederalReducer.forensic_exam}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>(B3) Law Enforcement Interview Advocacy/Accompaniment</TableCell>
                        <TableCell>{this.props.state.getFederalReducer.law_enforcement_interview}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>(B6) Immigration Assistance</TableCell>
                        <TableCell>{this.props.state.getFederalReducer.legal_immigration}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>(B7) Intervention with Employer, Creditor, Landlord, or Academic Institution</TableCell>
                        <TableCell>{this.props.state.getFederalReducer.legal_intervention}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>(B9) Transportation Assistance</TableCell>
                        <TableCell>{this.props.state.getFederalReducer.transportation}</TableCell>
                    </TableRow>
                     <TableRow>
                        <TableCell><strong> Total Personal Advocacy/Accompaniment </strong></TableCell>
                        <TableCell>{this.props.state.getFederalReducer.total_B_personal_advocacy_accompaniment}</TableCell>
                    </TableRow>
                    </TableBody>
                </Table>
            </section>
        );
    }
}
export default connect(mapStateToProps)(AdvocacyAccompaniment);
