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

class ServiceLocation extends Component {
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
                    name="service_location"
                    label="Location(where services are being provided)"
                    type="text"
                    margin="normal"
                    style={{ width: 600 }}
                    value={this.props.service_location}
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}

export default withStyles(styles)(ServiceLocation);