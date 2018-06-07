import React, { Component } from 'react';
import { connect } from 'react-redux';
import { USER_ACTIONS } from '../../../redux/actions/userActions';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
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

const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
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
        const { classes } = this.props;Table
        return (
            <section className="gender">
                <h4>Demographics: Gender Identity</h4>
                <Table className="federalTable">
                <TableHead>
                    <TableRow>
                        <TableCell>Gender Identity</TableCell>
                        <TableCell>Number</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    <TableRow>
                        <TableCell>Male</TableCell>
                        <TableCell>{this.props.state.getFederalReducer.victim_gender_male}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Female</TableCell>
                        <TableCell>{this.props.state.getFederalReducer.victim_gender_female}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Non-Binary</TableCell>
                        <TableCell>{this.props.state.getFederalReducer.victim_gender_non_binary}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Other</TableCell>
                        <TableCell>{this.props.state.getFederalReducer.victim_gender_other}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Not Reported</TableCell>
                        <TableCell>{this.props.state.getFederalReducer.victim_gender_unknown}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Total:</TableCell>
                        <TableCell>{this.props.state.getFederalReducer.total_gender_count}</TableCell>
                    </TableRow>
                    </TableBody>
                </Table>
            </section>
        );
    }
}
export default connect(mapStateToProps)(FederalGender);
