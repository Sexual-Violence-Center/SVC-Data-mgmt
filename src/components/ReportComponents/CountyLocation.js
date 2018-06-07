import React, { Component } from 'react';
import { connect } from 'react-redux';
import { USER_ACTIONS } from '../../redux/actions/userActions';

const mapStateToProps = state => ({
    user: state.user,
    county: state.getCountyReducer,
    state
});

class CountyLocationType extends Component {
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

        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
        console.log(this.props.state.getCountyReducer)
    }
    render() {
        return (
            <section className="county">
                <h4>Location where victims recieved services during the reporting period</h4>
                <table className="countyTable">
                    <thead>
                        <tr>
                            <th>Location</th>
                            <th>TOTAL</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>212 Medical Center</td>
                            <td>{this.props.county.location_212}</td>
                        </tr>
                        <tr>
                            <td>Abbott Northwestern Hospital</td>
                            <td>{this.props.state.getCountyReducer.location_ANW}</td>
                        </tr>
                        <tr>
                            <td>Belle Plain High School</td>
                            <td>{this.props.state.getCountyReducer.location_BPHS}</td>
                        </tr>
                        <tr>
                            <td>Fairview Southdale Hospital</td>
                            <td>{this.props.state.getCountyReducer.location_Fairview}</td>
                        </tr>
                        <tr>
                            <td>Hennepin County Jail</td>
                            <td>{this.props.state.getCountyReducer.location_HCJail}</td>
                        </tr>
                        <tr>
                            <td>HCMC</td>
                            <td>{this.props.state.getCountyReducer.location_HCMC}</td>
                        </tr>
                        <tr>
                            <td>House of Charity</td>
                            <td>{this.props.state.getCountyReducer.location_House_Charity}</td>
                        </tr>
                        <tr>
                            <td>Maple Grove Hospital</td>
                            <td>{this.props.state.getCountyReducer.location_Maple_Grove_Hospital}</td>
                        </tr>
                        <tr>
                            <td>Methodist Hospital</td>
                            <td>{this.props.state.getCountyReducer.location_Methodist}</td>
                        </tr>
                        <tr>
                            <td>New Prague High School</td>
                            <td>{this.props.state.getCountyReducer.location_New_PragueHS}</td>
                        </tr>
                        <tr>
                            <td>PEASE</td>
                            <td>{this.props.state.getCountyReducer.location_PEASE}</td>
                        </tr>
                        <tr>
                            <td>Plymouth</td>
                            <td>{this.props.state.getCountyReducer.location_Plymouth}</td>
                        </tr>
                        <tr>
                            <td>Richfield Health Services</td>
                            <td>{this.props.state.getCountyReducer.location_Richfield_Health_Services}</td>
                        </tr>
                        <tr>
                            <td>Scott County Jail</td>
                            <td>{this.props.state.getCountyReducer.location_SCJail}</td>
                        </tr>
                        <tr>
                            <td>Sexual Violence Center</td>
                            <td>{this.props.state.getCountyReducer.location_SVC}</td>
                        </tr>
                        <tr>
                            <td>Shakopee</td>
                            <td>{this.props.state.getCountyReducer.location_Shakopee}</td>
                        </tr>
                        <tr>
                            <td>Shakopee Correctional Facility</td>
                            <td>{this.props.state.getCountyReducer.location_Shakopee_Correctional_Facility}</td>
                        </tr>
                        <tr>
                            <td>St. Francist Hospital</td>
                            <td>{this.props.state.getCountyReducer.location_St_Francis}</td>
                        </tr>
                        <tr>
                            <td>Other</td>
                            <td>{this.props.state.getCountyReducer.location_other}</td>
                        </tr>
                        <tr>
                            <td>Unknown</td>
                            <td>{this.props.state.getCountyReducer.location_unknown}</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        )
    }
}
export default connect(mapStateToProps)(CountyLocationType);