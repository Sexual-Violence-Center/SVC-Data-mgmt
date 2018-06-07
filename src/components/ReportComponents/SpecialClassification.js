import React, { Component } from 'react';
import { connect } from 'react-redux';
import { USER_ACTIONS } from '../../redux/actions/userActions';

const mapStateToProps = state => ({
    user: state.user,
    person: state.getFederalReducer,
    state,
});


class SpecailClassification extends Component {
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
            <section className="total">
                <h4>Types of Victimization: Special classification of individuals</h4>
                <table className="federalTable">
                <thead>
                    <tr>
                        <th>Types of Individuals</th>
                        <th>Number</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Deaf/Hard of Hearing</td>
                        <td>{this.props.state.getFederalReducer.disability_deaf}</td>
                    </tr>
                    <tr>
                        <td>Homeless</td>
                        <td>{this.props.state.getFederalReducer.homeless}</td>
                    </tr>
                    <tr>
                        <td>Immigrants/Refugees/Asylum Seekers</td>
                        <td>{this.props.state.getFederalReducer.victim_immigrant}</td>
                    </tr>
                    <tr>
                        <td>LGBTQ</td>
                        <td>{this.props.state.getFederalReducer.lgbtq}</td>
                    </tr>
                    <tr>
                        <td>Veterans</td>
                        <td>{this.props.state.getFederalReducer.veteran}</td>
                    </tr>
                    <tr>
                        <td>Victims with Disabilities: Cognitive/Physical/Mental</td>
                        <td>{this.props.state.getFederalReducer.victims_with_disabilities}</td>
                    </tr>
                    <tr>
                        <td>Victims with Limited English Proficiency</td>
                        <td>{this.props.state.getFederalReducer.limited_english}</td>
                    </tr>
                    </tbody>
                </table>
            </section>
        );
    }
}
export default connect(mapStateToProps)(SpecailClassification);
