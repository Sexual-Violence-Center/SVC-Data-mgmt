import React, { Component } from 'react';
import { connect } from 'react-redux';
import Homeless from './DemographicOtherComponents/Homeless';
import LimitedEnglish from './DemographicOtherComponents/LimitedEnglish';
import Veteran from './DemographicOtherComponents/Veteran';

const mapStateToProps = state => ({
    state
});

class DemographicOther extends Component {
    constructor(){
        super();
        this.state = {
            homeless: undefined,
            limited_english: undefined,
            veteran: undefined,
        }
    }

    handleChangeFor = event => {
        const target = event.target;
        const value = target.type === ('checkbox') ? target.checked:
                                                     target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
        this.props.dispatch({
          type: this.props.dispatchTo,
          payload: { ...this.state, [name]: value }
        });
    }

    render() {
        return (
            <div>
                <h3>Other</h3>
                <Homeless handleChangeFor={this.handleChangeFor}/>
                <LimitedEnglish handleChangeFor={this.handleChangeFor}/>
                <Veteran handleChangeFor={this.handleChangeFor}/>
            </div>
        )
    }
}

export default connect(mapStateToProps)(DemographicOther);