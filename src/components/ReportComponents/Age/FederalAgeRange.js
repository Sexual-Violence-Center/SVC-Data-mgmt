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

class AgeRange extends Component {
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
            <section className="Age">
                <h4>Demographics: Age</h4>
                <Table className="federalTable">
                <TableHead>
                    <TableRow>
                        <TableCell>Age Range</TableCell>
                        <TableCell>Number</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    <TableRow>
                        <TableCell>0-12</TableCell>
                        <TableCell>{this.props.state.getFederalReducer.victim_age_zero_to_twelve}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>13-17</TableCell>
                        <TableCell>{this.props.state.getFederalReducer.victim_age_thirteen_to_seventeen}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>18-24</TableCell>
                        <TableCell>{this.props.state.getFederalReducer.victim_age_eighteen_to_twentyfour}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>25-59</TableCell>
                        <TableCell>{this.props.state.getFederalReducer.victim_age_twentyfive_to_fiftynine}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>60+</TableCell>
                        <TableCell>{this.props.state.getFederalReducer.victim_age_sixty_and_older}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Not Reported</TableCell>
                        <TableCell>{this.props.state.getFederalReducer.victim_age_unknown}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Total:</TableCell>
                        <TableCell>{this.props.state.getFederalReducer.total_age_count}</TableCell>
                    </TableRow>
                    </TableBody>
                </Table>
            </section>
        );
    }
}
export default connect(mapStateToProps)(AgeRange);
   