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
                <Table className="federalTable">
                <TableHead>
                    <TableRow>
                        <TableCell>Service Details</TableCell>
                        <TableCell>Total</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    <TableRow>
                        <TableCell>(A1) Information about the criminal justice proces</TableCell>
                        <TableCell>{this.props.state.getFederalReducer.info_criminal_justice_process}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>(A2) Information about victims rights</TableCell>
                        <TableCell>{this.props.state.getFederalReducer.info_victims_rights}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>(A3) Referral to other victim support programs</TableCell>
                        <TableCell>{this.props.state.getFederalReducer.referral_victim_support}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>(A4) Referral to other services, supports, resources</TableCell>
                        <TableCell>{this.props.state.getFederalReducer.referral_other_services}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><strong> Total Information & Referral Services </strong></TableCell>
                        <TableCell>{this.props.state.getFederalReducer.total_A_information_referral}</TableCell>
                    </TableRow>
                    </TableBody>
                </Table>
            </section>
        );
    }
}
export default connect(mapStateToProps)(InformationReferral);
