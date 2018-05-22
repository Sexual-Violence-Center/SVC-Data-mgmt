import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    state
});

class PoliceReport extends Component {
    constructor(){
        super();
        this.state = {
            police_report_filed: ''
        }
    }

    handleChangeFor = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
        this.props.dispatch({
            type: 'ENTRY_FORM_DATA', 
            payload: {...this.state, [name]: value }
        })
    }

    render() {
        return (
            <div>
                <h3>Was a police report filed?</h3>
                <select name="police_report_filed" value={this.state.police_report_filed} onChange={this.handleChangeFor}>
                    <option>Select One</option>
                    <option value="yes">yes</option>
                    <option value="no">no</option>
                    <option value="unknown">unknown</option>
                </select>
            </div>
        )
    }
}

export default connect(mapStateToProps)(PoliceReport);