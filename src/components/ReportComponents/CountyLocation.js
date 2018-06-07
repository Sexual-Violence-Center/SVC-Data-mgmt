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

class CountyLocationType extends Component {
    constructor() {
        super();
        this.state = {
            starTableCellate: '',
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

    componenTableCellidMount() {

        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
        console.log(this.props.state.getCountyReducer)
    }
    render() {
        return (
            <section className="county">
                <h4>Location where victims recieved services during the reporting period</h4>
                <Table className="countyTable">
                    <TableHead>
                        <TableRow>
                            <TableCell>Location</TableCell>
                            <TableCell>TOTAL</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>212 Medical Center</TableCell>
                            <TableCell>{this.props.county.location_212}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Abbott Northwestern Hospital</TableCell>
                            <TableCell>{this.props.state.getCountyReducer.location_ANW}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Belle Plain High School</TableCell>
                            <TableCell>{this.props.state.getCountyReducer.location_BPHS}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Fairview Southdale Hospital</TableCell>
                            <TableCell>{this.props.state.getCountyReducer.location_Fairview}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Hennepin County Jail</TableCell>
                            <TableCell>{this.props.state.getCountyReducer.location_HCJail}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>HCMC</TableCell>
                            <TableCell>{this.props.state.getCountyReducer.location_HCMC}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>House of Charity</TableCell>
                            <TableCell>{this.props.state.getCountyReducer.location_House_Charity}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Maple Grove Hospital</TableCell>
                            <TableCell>{this.props.state.getCountyReducer.location_Maple_Grove_Hospital}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Methodist Hospital</TableCell>
                            <TableCell>{this.props.state.getCountyReducer.location_Methodist}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>New Prague High School</TableCell>
                            <TableCell>{this.props.state.getCountyReducer.location_New_PragueHS}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>PEASE</TableCell>
                            <TableCell>{this.props.state.getCountyReducer.location_PEASE}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Plymouth</TableCell>
                            <TableCell>{this.props.state.getCountyReducer.location_Plymouth}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Richfield Health Services</TableCell>
                            <TableCell>{this.props.state.getCountyReducer.location_Richfield_Health_Services}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Scott County Jail</TableCell>
                            <TableCell>{this.props.state.getCountyReducer.location_SCJail}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Sexual Violence Center</TableCell>
                            <TableCell>{this.props.state.getCountyReducer.location_SVC}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Shakopee</TableCell>
                            <TableCell>{this.props.state.getCountyReducer.location_Shakopee}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Shakopee Correctional Facility</TableCell>
                            <TableCell>{this.props.state.getCountyReducer.location_Shakopee_Correctional_Facility}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>St. Francist Hospital</TableCell>
                            <TableCell>{this.props.state.getCountyReducer.location_St_Francis}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Other</TableCell>
                            <TableCell>{this.props.state.getCountyReducer.location_other}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Unknown</TableCell>
                            <TableCell>{this.props.state.getCountyReducer.location_unknown}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </section>
        )
    }
}
export default connect(mapStateToProps)(CountyLocationType);