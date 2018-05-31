import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';

const styles = theme => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
});

class ClientNumber extends Component {
    constructor() {
        super();
        this.state = {
        }
    }


    handleChange = (event) => {
        //this.setState({ name: event.target.value });
        this.props.handleChangeFor(event);
    }



    render() {
        const { classes } = this.props;
        console.log("client number ", this.props.in_person_client_number);
        return (
            
            <div>
                <TextField
                    name="in_person_client_number"
                    label="Client Number"
                    className={classes.textField}
                    type="text"
                    margin="normal"
                    value={this.props.in_person_client_number}
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}

ClientNumber.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ClientNumber);