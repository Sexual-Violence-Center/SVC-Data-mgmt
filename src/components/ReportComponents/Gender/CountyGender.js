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

class CountyGender extends Component{ 
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

    componentDidMount () {
        
        this.props.dispatch({type: USER_ACTIONS.FETCH_USER});
        console.log(this.props.state.getCountyReducer)
    }
    render () {
        return (
            <section className="gender">
                <h4>Demographics: Gender Identity</h4>
                <Table className="countyTable">
                <TableHead>
                    <TableRow>
                        <TableCell>Gender Identity</TableCell>
                        <TableCell>Number</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    <TableRow>
                        <TableCell>Male</TableCell>
                        <TableCell>{this.props.state.getCountyReducer.victim_gender_male}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Female</TableCell>
                        <TableCell>{this.props.state.getCountyReducer.victim_gender_female}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Transgender</TableCell>
                        <TableCell>{this.props.state.getCountyReducer.victim_gender_transgender}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Unknown</TableCell>
                        <TableCell>{this.props.state.getCountyReducer.victim_gender_unknown}</TableCell>
                    </TableRow>
                    </TableBody>
                </Table>
            </section>
        )
    }
}
export default connect(mapStateToProps)(CountyGender);