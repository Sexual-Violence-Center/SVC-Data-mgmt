import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';

const styles = theme => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
});

class HearAboutSVC extends Component {
    constructor() {
        super();
        this.state = {
            name: ''
        }
    }


    handleChange = (event) => {
        this.setState({ name: event.target.value });
        this.props.handleChangeFor(event);
    }

    render() {
        return (
            <div>
                <TextField
                    name="victim_referral_source"
                    label="How did they hear about SVC?"
                    style={{ width: 300 }}
                    type="text"
                    margin="normal"
                    value={this.props.victim_referral_source}
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}

export default withStyles(styles)(HearAboutSVC);