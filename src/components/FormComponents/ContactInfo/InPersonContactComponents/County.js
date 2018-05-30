import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { MenuItem, InputLabel, Select, FormControl, Divider, } from '@material-ui/core';

const styles = theme => ({

    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
});

class County extends Component {
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
        const { classes } = this.props;
        return (
            <div>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="service_county">County</InputLabel>
                    <Select
                        value={this.state.name}
                        onChange={this.handleChange}
                        inputProps={{
                            name: 'service_county',
                            id: 'service_county',
                        }}>
                        <MenuItem value="">
                            <em>Select One</em>
                        </MenuItem>
                        <Divider />
                        <MenuItem value="Hennepin">Hennepin</MenuItem>
                        <Divider />
                        <MenuItem value="Scott">Scott</MenuItem>
                        <Divider />
                        <MenuItem value="Carver">Carver</MenuItem>
                        <Divider />
                        <MenuItem value="Other">Other</MenuItem>
                    </Select>
                </FormControl>
            </div>
        )
    }
}

County.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(County);