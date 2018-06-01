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

        this.props.handleChangeFor(event);
    }

    render() {
        const { classes } = this.props;
        return <div>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="service_county">County</InputLabel>
              <Select value={this.props.service_county} onChange={this.handleChange} inputProps={{ name: "service_county", id: "service_county" }}>
                <MenuItem style={{ width: "100%" }} value="">
                  <em>Select One</em>
                </MenuItem>
                <Divider />
                <MenuItem style={{ width: "100%" }} value="Hennepin">
                  Hennepin
                </MenuItem>
                <Divider />
                <MenuItem style={{ width: "100%" }} value="Scott">
                  Scott
                </MenuItem>
                <Divider />
                <MenuItem style={{ width: "100%" }} value="Carver">
                  Carver
                </MenuItem>
                <Divider />
                <MenuItem style={{ width: "100%" }} value="Other">
                  Other
                </MenuItem>
              </Select>
            </FormControl>
          </div>;
    }
}

County.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(County);