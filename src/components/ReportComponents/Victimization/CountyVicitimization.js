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

class CountyVictimization extends Component{ 
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
            <section className="victimization"> 
            <h4>Types of Victimization</h4>
            <Table className="countyTable">
            <TableHead>
                <TableRow>
                    <TableCell>Victimization Types</TableCell>
                    <TableCell>Number</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                <TableRow>
                    <TableCell>Adult Sexual Assault</TableCell>
                    <TableCell>{this.props.state.getCountyReducer.violence_adult_sexual}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Adult Sexually Abused/Assaulted as Children Total</TableCell>
                    <TableCell>{this.props.state.getCountyReducer.violence_adult_when_child_total}</TableCell>
                </TableRow>
                        <TableRow>
                            <TableCell>Adult Sexually Abused/Assaulted as Children by Family</TableCell>
                            <TableCell>{this.props.state.getCountyReducer.violence_adult_when_child_by_family}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Adult Sexually Abused/Assaulted as Children by Other</TableCell>
                            <TableCell>{this.props.state.getCountyReducer.violence_adult_when_child_by_other}</TableCell>
                        </TableRow>
                <TableRow>
                    <TableCell>Bullying</TableCell>
                    <TableCell>{this.props.state.getCountyReducer.violence_bullying}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Child Pornography</TableCell>
                    <TableCell>{this.props.state.getCountyReducer.violence_child_pornography}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Child Sexual Abuse/Assault Total</TableCell>
                    <TableCell>{this.props.state.getCountyReducer.violence_minor_total}</TableCell>
                </TableRow>
                        <TableRow>
                            <TableCell>Child Sexual Abuse/Assault by Family</TableCell>
                            <TableCell>{this.props.state.getCountyReducer.violence_minor_by_family}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Child Sexual Abuse/Assault by Other</TableCell>
                            <TableCell>{this.props.state.getCountyReducer.violence_minor_by_other}</TableCell>
                        </TableRow>
                <TableRow>
                    <TableCell>Domestic And/Or Family Violence</TableCell>
                    <TableCell>{this.props.state.getCountyReducer.violence_domestic}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Elder Abuse or Neglect</TableCell>
                    <TableCell>{this.props.state.getCountyReducer.violence_elder}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Human Trafficking: Sex</TableCell>
                    <TableCell>{this.props.state.getCountyReducer.violence_exploitation_trafficking}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Stalking/Harassment Total</TableCell>
                    <TableCell>{this.props.state.getCountyReducer.violence_stalking_harassment_total}</TableCell>
                </TableRow>
                        <TableRow>
                            <TableCell>Stalking/Harassment - Exposing</TableCell>
                            <TableCell>{this.props.state.getCountyReducer.violence_exposing}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Stalking/Harassment - Harassment</TableCell>
                            <TableCell>{this.props.state.getCountyReducer.violence_harassment}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Stalking/Harassment - Internet</TableCell>
                            <TableCell>{this.props.state.getCountyReducer.violence_internet}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Stalking/Harassment - Phone</TableCell>
                            <TableCell>{this.props.state.getCountyReducer.violence_phone}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Stalking/Harassment - Stalking</TableCell>
                            <TableCell>{this.props.state.getCountyReducer.violence_stalking}</TableCell>
                        </TableRow>
                <TableRow>
                    <TableCell>Teen Dating Victimization</TableCell>
                    <TableCell>{this.props.state.getCountyReducer.violence_teen_dating}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Unknown/Pass/Doesn't Know</TableCell>
                    <TableCell>{this.props.state.getCountyReducer.violence_unknown}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Other</TableCell>
                    <TableCell>{this.props.state.getCountyReducer.violence_other}</TableCell>
                </TableRow>
                </TableBody>
            </Table>
        </section>
        )
    }
}
export default connect(mapStateToProps)(CountyVictimization);