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
    county: state.getCountyReducer,
    state
});

class CountyVictimType extends Component{ 
    constructor(){
        super();
        this.state={
            startDate:'',
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

    componentDidMount () {
        
        this.props.dispatch({type: USER_ACTIONS.FETCH_USER});
        console.log(this.props.state.getCountyReducer)
    }
    render () {
        return (
            <section className="county">
                <h4>New Hennepin County residents by victim type who recieved services during the reporting period</h4>
                <Table className="countyTable">
                <TableHead>
                    <TableRow>
                        <TableCell>Type of Individual</TableCell>
                        <TableCell>Number</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    <TableRow>
                        <TableCell>Adult Primary Victim/Survivor</TableCell>
                        <TableCell>{this.props.state.getCountyReducer.adult_primary_victim}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Adult Secondary Victim/Survivor</TableCell>
                        <TableCell>{this.props.state.getCountyReducer.adult_secondary_victim}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Youth Primary Victim/Survivor</TableCell>
                        <TableCell>{this.props.state.getCountyReducer.youth_primary_victim}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Youth Secondary Victim/Survivor</TableCell>
                        <TableCell>{this.props.state.getCountyReducer.youth_secondary_victim}</TableCell>
                    </TableRow>
                    </TableBody>
                </Table>
            </section>
        )
    }
}
export default connect(mapStateToProps)(CountyVictimType);