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
    county: state.getCountyReducer,
    state
});

class NewVictimsCounty extends Component {
    constructor() {
        super();
        this.state = {
            startDate: '',
            endDate: '',
            county: '',
            service_location: ''
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
            type: 'GET_PERSON_DATA_COUNTY',
            payload: this.state
        })
    }
    print = () => {
        console.log('print button clicked');
        window.print();
    }

    componentDidMount() {

        this.props.dispatch({
            type:
                USER_ACTIONS.FETCH_USER
        });
        console.log(this.props.state.getCountyReducer)
    }
    render() {
        return (
            <section className="new">
                <h4>New Hennepin County residents who recieved services during the reporting period</h4>
                <Table className="countyTable">
                    <TableHead>
                        <TableRow>
                            <TableCell>Types of Individuals</TableCell>
                            <TableCell>Number</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>Total Clients Served During the Reporting Period</TableCell>
                            <TableCell>{this.props.state.getCountyReducer.new_victim}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Total Clients Served in Advocacy Program</TableCell>
                            <TableCell>{this.props.state.getCountyReducer.new_victim}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Total Clients Served in Individual Counseling Program</TableCell>
                            <TableCell>{this.props.state.getCountyReducer.total_clients_individual_counseling}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Total Clients Served in Group Counseling Program</TableCell>
                            <TableCell>{this.props.state.getCountyReducer.total_clients_group_counseling}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </section>
        )
    }
}
export default connect(mapStateToProps)(NewVictimsCounty);