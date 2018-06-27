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


class CriminalCivilJusticeSystemAssistance extends Component {
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
            <div className="federalReport">
               <section className="total">
                <h4>(E) Criminal/Civil Justice System Assistance: Total services provided during the reporting period</h4>
                <Table className="federalTable">
                <TableHead>
                    <TableRow>
                        <TableCell>Service Details</TableCell>
                        <TableCell>Total</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    <TableRow>
                        <TableCell>(E4) Civil Legal Assistance in Obtaining Protection or Restraining Order</TableCell>
                        <TableCell>{this.props.state.getFederalReducer.oft_hro}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>(E6) Other Emergency-Justice Related Assistance</TableCell>
                        <TableCell>{this.props.state.getFederalReducer.other_emergency_justice}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>(E7) Immigration Assistance</TableCell>
                        <TableCell>{this.props.state.getFederalReducer.legal_immigration}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>(E8) Prosecution Interview Advocacy/Accompaniment</TableCell>
                        <TableCell>{this.props.state.getFederalReducer.legal_prosecution_related}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>(E9) Law Enforcement Interview Advocacy/Accompaniment</TableCell>
                        <TableCell>{this.props.state.getFederalReducer.legal_law_enforcement_interview}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>(E10) Criminal Advocacy/Accompaniment</TableCell>
                        <TableCell>{this.props.state.getFederalReducer.legal_court_advocacy}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><strong>Total Criminal/Civil Justice System Assistance</strong></TableCell>
                        <TableCell>{this.props.state.getFederalReducer.total_E_criminal_civil_justice_system}</TableCell>
                    </TableRow>
                    </TableBody>
                </Table>
                </section>
            </div>
        );
    }
}
export default connect(mapStateToProps)(CriminalCivilJusticeSystemAssistance);

            