import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card } from '@material-ui/core';

const mapStateToProps = state => ({
    state
});

const style = {
    padding: '20px',
    margin: '10px'
}

class Support extends Component {
    constructor() {
        super();
        this.state = {
            supported_on_call: '',
        }
    }

    handleChangeFor = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked :
            target.type === 'radio' ? target.checked :
                target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
        this.props.dispatch({
            type: this.props.dispatchTo,
            payload: { ...this.state, [name]: value }
        })
    }
    render() {
        return (
            <div className="support">
                <Card style={style}>
                    <h2>Did They Feel Supported?</h2>
                    <p><strong>MANDATORY</strong> Did you feel that you were supported on this call?</p>
                    <select name="supported_on_call" value={this.state.supported_on_call} onChange={this.handleChangeFor}>
                        <option>Select One</option>
                        <option value="yes">yes</option>
                        <option value="no">no</option>
                        <option value="unknown">unknown/hung up</option>
                    </select>
                </Card>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Support);