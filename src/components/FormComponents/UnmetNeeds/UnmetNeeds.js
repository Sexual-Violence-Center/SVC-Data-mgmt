import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card } from '@material-ui/core';

import UnmetFinancial from './UnmetNeedsComponents/UnmetFinancial';
import UnmetHousing from './UnmetNeedsComponents/UnmetHousing';
import UnmetOther from './UnmetNeedsComponents/UnmetOther';

const mapStateToProps = state => ({
    state
});

const style = {
    padding: '20px',
    margin: '10px'
}

const initialState = {
  unmet_need_financial: false,
  unmet_need_shelter_housing: false,
  unmet_need_other: false,
  unmet_need_staying_where: "",
  unmet_other_descr: ""
};

class UnmetNeeds extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  static getDerivedStateFromProps = (props, state) => {
    if (props.dispatchTo === "UPDATE_THE_FORM") {
      const { updateFormReducer } = props.state;
      Object.keys(updateFormReducer).forEach(key => {
        if (updateFormReducer[key] === null) {
          updateFormReducer[key] = undefined;
        }
        return null;
      });
      return updateFormReducer;
    } else if (!props.state.EntryFormReducer) {
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
    return <div className="unmetNeeds">
        <Card style={style}>
          <h2>Unmet Needs</h2>
          <div className="unmetNeedsContainer">
            <label>Were there any unmet needs for this individual?</label>
            <br />
            <br />
            <UnmetFinancial handleChangeFor={this.handleChangeFor} unmet_need_financial={this.state.unmet_need_financial} />
            <UnmetHousing handleChangeFor={this.handleChangeFor} unmet_need_shelter_housing={this.state.unmet_need_shelter_housing} unmet_need_staying_where={this.state.unmet_need_staying_where} />
            <UnmetOther handleChangeFor={this.handleChangeFor} unmet_need_other={this.state.unmet_need_other} unmet_other_descr ={this.state.unmet_other_descr}/>
          </div>
        </Card>
      </div>;
  }
}

export default connect(mapStateToProps)(UnmetNeeds);