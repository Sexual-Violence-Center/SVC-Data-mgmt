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
                            <MenuItem style={{width: '100%'}} value="asian">Asian</MenuItem>
                            <Divider />
                            <MenuItem style={{width: '100%'}} value="african american/black">African American/Black</MenuItem>
                            <Divider />
                            <MenuItem style={{width: '100%'}} value="hispanic/latino">chican@/latin@</MenuItem>
                            <Divider />
                            <MenuItem style={{width: '100%'}} value="multi-racial">Multi-racial</MenuItem>
                            <Divider />
                            <MenuItem style={{width: '100%'}} value="amerIndAlaskaNative">Native American/ Alaskan Native</MenuItem>
                            <Divider />
                            <MenuItem style={{width: '100%'}} value="native hawaiian/pacific islander">Native Hawaiian/Pacific Islander</MenuItem>
                            <Divider />
                            <MenuItem style={{width: '100%'}} value="white non-latino/caucasian">White Non-Latino/Caucasian</MenuItem>
                            <Divider />
                            <MenuItem style={{width: '100%'}} value="other">Other</MenuItem>
                            <Divider />
                            <MenuItem style={{width: '100%'}} value="unknown/pass">Unknown/Pass</MenuItem>
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