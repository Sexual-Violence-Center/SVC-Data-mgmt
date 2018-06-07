import React, { Component } from 'react';
import { connect } from 'react-redux';
import { USER_ACTIONS } from '../../../redux/actions/userActions';

const mapStateToProps = state => ({
    user: state.user,
    person: state.getFederalReducer,
    state,
});


class AgeRange extends Component {
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
            <section className="Age">
                <h4>Demographics: Age</h4>
                <table className="federalTable">
                <thead>
                    <tr>
                        <th>Age Range</th>
                        <th>Number</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>0-12</td>
                        <td>{this.props.state.getFederalReducer.victim_age_zero_to_twelve}</td>
                    </tr>
                    <tr>
                        <td>13-17</td>
                        <td>{this.props.state.getFederalReducer.victim_age_thirteen_to_seventeen}</td>
                    </tr>
                    <tr>
                        <td>18-24</td>
                        <td>{this.props.state.getFederalReducer.victim_age_eighteen_to_twentyfour}</td>
                    </tr>
                    <tr>
                        <td>25-59</td>
                        <td>{this.props.state.getFederalReducer.victim_age_twentyfive_to_fiftynine}</td>
                    </tr>
                    <tr>
                        <td>60+</td>
                        <td>{this.props.state.getFederalReducer.victim_age_sixty_and_older}</td>
                    </tr>
                    <tr>
                        <td>Not Reported</td>
                        <td>{this.props.state.getFederalReducer.victim_age_unknown}</td>
                    </tr>
                    <tr>
                        <td>Total:</td>
                        <td>{this.props.state.getFederalReducer.total_age_count}</td>
                    </tr>
                    </tbody>
                </table>
            </section>
        );
    }
}
export default connect(mapStateToProps)(AgeRange);
   