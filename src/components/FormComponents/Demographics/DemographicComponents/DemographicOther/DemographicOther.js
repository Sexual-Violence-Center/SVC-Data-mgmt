import React, { Component } from 'react';
import { connect } from 'react-redux';
import Homeless from './DemographicOtherComponents/Homeless';
import LimitedEnglish from './DemographicOtherComponents/LimitedEnglish';
import Veteran from './DemographicOtherComponents/Veteran';

const mapStateToProps = state => ({
    state
});

const initialState = {
  homeless: false,
  limited_english: false,
  veteran: false
};

class DemographicOther extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  static getDerivedStateFromProps = (props, state) => {
    //if on update the form sets state to the update form reducer
    //changes any null values to undefined
    if (props.dispatchTo === "UPDATE_THE_FORM") {
      const { updateFormReducer } = props.state;
      Object.keys(updateFormReducer).forEach(key => {
        if (updateFormReducer[key] === null) {
          updateFormReducer[key] = undefined;
        }
        return null;
      });
      return updateFormReducer;
    } //If nothing in entryform reducer resets state
    else if (!props.state.EntryFormReducer) {
      return initialState;
    } else {
      return state;
    }
  };

  handleChangeFor = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
    this.props.dispatch({
      type: this.props.dispatchTo,
      payload: { ...this.state, [name]: value }
    });
  };

  render() {
    return (
      <div>
        <h3>Other</h3>
        <Homeless handleChangeFor={this.handleChangeFor} homeless={this.state.homeless}/>
        <LimitedEnglish handleChangeFor={this.handleChangeFor} limited_english = {this.state.limited_english}/>
        <Veteran handleChangeFor={this.handleChangeFor} veteran = {this.state.veteran}/>
      </div>
    );
  }
}

export default connect(mapStateToProps)(DemographicOther);