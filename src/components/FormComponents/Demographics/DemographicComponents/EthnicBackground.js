import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { MenuItem, InputLabel, Select, FormControl, Divider, TextField } from '@material-ui/core';

const styles = theme => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 200,
    },
});

const mapStateToProps = state => ({
    state
});

class EthnicBackground extends Component {
    constructor() {
        super();
        this.state = {
            victim_ethnicity: '',
            victim_ethnicity_other_specify: '',
        }
    }

    handleChangeFor = event => {
        const target = event.target;
        const value = target.value;
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
        const { classes } = this.props;

        return (
            <div>
                <h3>Ethnic Background</h3>
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="victim_ethnicity">Select One</InputLabel>
                        <Select
                            value={this.state.victim_ethnicity}
                            onChange={this.handleChangeFor}
                            autoWidth
                            inputProps={{
                                name: 'victim_ethnicity',
                                id: 'victim_ethnicity',
                            }}>
                            <MenuItem style={{width: '100%'}} value="Asian">Asian</MenuItem>
                            <Divider />
                            <MenuItem style={{width: '100%'}} value="African American/Black">African American/Black</MenuItem>
                            <Divider />
                            <MenuItem style={{width: '100%'}} value="Chican@/Latin@">Chican@/Latin@</MenuItem>
                            <Divider />
                            <MenuItem style={{width: '100%'}} value="Multi-racial">Multi-racial</MenuItem>
                            <Divider />
                            <MenuItem style={{width: '100%'}} value="Native American">Native American/ Alaskan Native</MenuItem>
                            <Divider />
                            <MenuItem style={{width: '100%'}} value="Native Hawaiian/Pacific Islander">Native Hawaiian/Pacific Islander</MenuItem>
                            <Divider />
                            <MenuItem style={{width: '100%'}} value="White non-Latino/Caucasian">White Non-Latino/Caucasian</MenuItem>
                            <Divider />
                            <MenuItem style={{width: '100%'}} value="Other">Other</MenuItem>
                            <Divider />
                            <MenuItem style={{width: '100%'}} value="unknown">Unknown/Pass</MenuItem>
                        </Select>
                    </FormControl>
                <TextField
                    name="victim_ethnicity_other_specify"
                    label="If Other, please specify"
                    className={classes.textField}
                    type="text"
                    margin="normal"
                    value={this.props.advocate_name}
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}

EthnicBackground.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(EthnicBackground));