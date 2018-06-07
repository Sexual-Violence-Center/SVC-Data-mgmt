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

class CountyAgeRange extends Component{ 
    constructor(){
        super();
        this.state={
            starTableCellate:'',
            endDate:'',
            county:'',
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

    componenTableCellidMount () {
        
        this.props.dispatch({type: USER_ACTIONS.FETCH_USER});
        console.log(this.props.state.getCountyReducer)
    }
    render () {
        return (
            <section className="Age">
            <h4>Demographics: Age</h4>
            <Table className="countyTable">
            <TableHead>
                <TableRow>
                    <TableCell>Age Range</TableCell>
                    <TableCell>Total</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                <TableRow>
                    <TableCell>0 - 18</TableCell>
                    <TableCell>{this.props.state.getCountyReducer.victim_age_zero_to_eightteen}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>19 - 50</TableCell>
                    <TableCell>{this.props.state.getCountyReducer.victim_age_nineteen_to_fifty}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>50+</TableCell>
                    <TableCell>{this.props.state.getCountyReducer.victim_age_over_fifty}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Not Reported</TableCell>
                    <TableCell>{this.props.state.getCountyReducer.victim_age_unknown}</TableCell>
                </TableRow>
                </TableBody>
            </Table>
        </section>
        )
    }
}
export default connect(mapStateToProps)(CountyAgeRange);