import React, { Component } from 'react';
import { connect } from 'react-redux';
import { USER_ACTIONS } from '../../../redux/actions/userActions';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';Table

const mapStateToProps = state => ({
    user: state.user,
    county: state.getCountyReducer,
    state
});

class CountyEthnicity extends Component{ 
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
  
    componentDidMount () {
        
        this.props.dispatch({type: USER_ACTIONS.FETCH_USER});
        console.log(this.props.state.getCountyReducer)
    }
    render () {
        return (
            <section className="race">
            <h4>Demographics: Race/Ethnicity</h4>
            <Table className="countyTable">
            <TableHead>
                <TableRow>
                    <TableCell>Race/Ethnicity</TableCell>
                    <TableCell>Primary</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                <TableRow>
                    <TableCell>American Indian or Alaskan Native</TableCell>
                    <TableCell>{this.props.state.getCountyReducer.amerIndAlaskaNative}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Asian</TableCell>
                    <TableCell>{this.props.state.getCountyReducer.victim_ethnicity_asian}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Black or African American</TableCell>
                    <TableCell>{this.props.state.getCountyReducer.africanAmerican}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Hispanic or Latino</TableCell>
                    <TableCell>{this.props.state.getCountyReducer.hispanicOrLatino}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Native Hawaiian or Other Pacific Islander</TableCell>
                    <TableCell>{this.props.state.getCountyReducer.pacificIslanderHawaiian}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>White Non-Latino or Caucasian</TableCell>
                    <TableCell>{this.props.state.getCountyReducer.white}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Other Race</TableCell>
                    <TableCell>{this.props.state.getCountyReducer.other}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Multiple Races</TableCell>
                    <TableCell>{this.props.state.getCountyReducer.multiple_races}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Not Reported</TableCell>
                    <TableCell>{this.props.state.getCountyReducer.not_reported}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Total Ethnicity:</TableCell>
                    <TableCell>{this.props.state.getCountyReducer.total_ethnicity}</TableCell>
                </TableRow>
                </TableBody>
            </Table>
        </section>
        )
    }
}
export default connect(mapStateToProps)(CountyEthnicity);