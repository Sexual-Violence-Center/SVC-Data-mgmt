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

class UnmetNeeds extends Component {
    constructor() {
        super();
        this.state = {
            unmet_need_financial: undefined,
            unmet_need_shelter_housing: undefined,
            unmet_need_other: undefined,
            unmet_need_staying_where: '',
            unmet_other_descr: '',
        }
    }

    handleChangeFor = event => {
        const target = event.target;
        const value = target.type === ('checkbox') ? target.checked :
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
            <div className="unmetNeeds">
                <Card style={style}>
                    <h2>Unmet Needs</h2>
                    <div className="unmetNeedsContainer">
                        <label>Were there any unmet needs for this individual?</label>
                        <br />
                        <br />
                        <UnmetFinancial handleChangeFor={this.handleChangeFor}/>
                        <UnmetHousing handleChangeFor={this.handleChangeFor}/>
                        <UnmetOther handleChangeFor={this.handleChangeFor}/>
                    </div>
                </Card>
            </div>
        )
    }
}

export default connect(mapStateToProps)(UnmetNeeds);