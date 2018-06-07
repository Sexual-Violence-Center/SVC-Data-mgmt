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

class Ethnicity extends Component {
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
            <section className="race">
                <h4>Demographics: Race/Ethnicity</h4>
                <Table className="federalTable">
                <TableHead>
                    <TableRow>
                        <TableCell>Race/Ethnicity</TableCell>
                        <TableCell>Primary</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    <TableRow>
                        <TableCell>American Indian or Alaskan Native</TableCell>
                        <TableCell>{this.props.state.getFederalReducer.Native_American}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Asian</TableCell>
                        <TableCell>{this.props.state.getFederalReducer.victim_ethnicity_asian}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Black or African American</TableCell>
                        <TableCell>{this.props.state.getFederalReducer.africanAmerican}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Hispanic or Latino</TableCell>
                        <TableCell>{this.props.state.getFederalReducer.hispanicOrLatino}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Native Hawaiian or Other Pacific Islander</TableCell>
                        <TableCell>{this.props.state.getFederalReducer.pacificIslanderHawaiian}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>White Non-Latino or Caucasian</TableCell>
                        <TableCell>{this.props.state.getFederalReducer.white}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Other Race</TableCell>
                        <TableCell>{this.props.state.getFederalReducer.Other}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Multiple Races</TableCell>
                        <TableCell>{this.props.state.getFederalReducer.multiple_races}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Total</TableCell>
                        <TableCell>{this.props.state.getFederalReducer.total_ethnicity}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Not Reported</TableCell>
                        <TableCell>{this.props.state.getFederalReducer.not_reported}</TableCell>
                    </TableRow>
                    </TableBody>
                </Table>
            </section>
        );
    }
}
export default connect(mapStateToProps)(Ethnicity);
