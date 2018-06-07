import React, { Component } from 'react';
import { connect } from 'react-redux';
import { USER_ACTIONS } from '../../redux/actions/userActions';

const mapStateToProps = state => ({
    user: state.user,
    person: state.getFederalReducer,
    state,
});


class CriminalCivilJusticeSystemAssistance extends Component {
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
        return (
            <div className="federalReport">
               <section className="total">
                <h4>(E) Criminal/Civil Justice System Assistance: Total services provided during the reporting period</h4>
                <table className="federalTable">
                <thead>
                    <tr>
                        <th>Service Details</th>
                        <th>Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>(E4) Civil Legal Assistance in Obtaining Protection or Restraining Order</td>
                        <td>{this.props.state.getFederalReducer.ofp_hro}</td>
                    </tr>
                    <tr>
                        <td>(E6) Other Emergency-Justice Related Assistance</td>
                        <td>{this.props.state.getFederalReducer.other_emergency_justice}</td>
                    </tr>
                    <tr>
                        <td>(E7) Immigration Assistance</td>
                        <td>{this.props.state.getFederalReducer.legal_immigration}</td>
                    </tr>
                    <tr>
                        <td>(E8) Prosecution Interview Advocacy/Accompaniment</td>
                        <td>{this.props.state.getFederalReducer.legal_prosecution_related}</td>
                    </tr>
                    <tr>
                        <td>(E9) Law Enforcement Interview Advocacy/Accompaniment</td>
                        <td>{this.props.state.getFederalReducer.legal_law_enforcement_interview}</td>
                    </tr>
                    <tr>
                        <td>(E10) Criminal Advocacy/Accompaniment</td>
                        <td>{this.props.state.getFederalReducer.legal_court_advocacy}</td>
                    </tr>
                    <tr>
                        <td><strong>Total Criminal/Civil Justice System Assistance</strong></td>
                        <td>{this.props.state.getFederalReducer.total_E_criminal_civil_justice_system}</td>
                    </tr>
                    </tbody>
                </table>
                </section>
            </div>
        );
    }
}
export default connect(mapStateToProps)(CriminalCivilJusticeSystemAssistance);

            