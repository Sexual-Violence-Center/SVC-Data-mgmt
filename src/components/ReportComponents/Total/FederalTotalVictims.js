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

        const { classes } = this.props;

        return (
            <div className="dropdown">
            <section className="total">
                <h4>Individuals who received services during the reporting period</h4>
                <Table className="federalTable">
                <TableHead>
                    <TableRow>
                        <TableCell>Types of Individuals</TableCell>
                        <TableCell>Number</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    <TableRow>
                        <TableCell>Total:</TableCell>
                        <TableCell>{this.props.state.getFederalReducer.total_victims}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Anonymous Contacts:</TableCell>
                        <TableCell>{this.props.state.getFederalReducer.anon_victim}</TableCell>
                    </TableRow>
                    </TableBody>
                </Table>
            </section>
        </div>
        );
    }
}
export default connect(mapStateToProps)(TotalVictims);
