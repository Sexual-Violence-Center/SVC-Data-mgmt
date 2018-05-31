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

class ImmigrantStatus extends Component {
    constructor(){
        super();
        this.state = {
            victim_immigrant: '',
            victim_immigrant_other_specify: '',
        }
    }

    handleChangeFor = event => {
        const target = event.target;
        const value = target.type === ('checkbox') ? target.checked :
                      target.type === ('radio') ? target.checked  : 
                      target.value;
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
                <h3>Immigrant Status</h3>
                <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="victim_immigrant">Select One</InputLabel>
                        <Select
                            value={this.state.victim_immigrant}
                            onChange={this.handleChangeFor}
                            autoWidth
                            inputProps={{
                                name: 'victim_immigrant',
                                id: 'victim_immigrant',
                            }}>
                            <MenuItem style={{width: '100%'}} value="africa">Africa</MenuItem>
                            <Divider />
                            <MenuItem style={{width: '100%'}} value="asia">Asia</MenuItem>
                            <Divider />
                            <MenuItem style={{width: '100%'}} value="europe">Europe</MenuItem>
                            <Divider />
                            <MenuItem style={{width: '100%'}} value="mex/cen/south america">Mex/Cen/South America</MenuItem>
                            <Divider />
                            <MenuItem style={{width: '100%'}} value="middle east">Middle East</MenuItem>
                            <Divider />
                            <MenuItem style={{width: '100%'}} value="other">Other</MenuItem>
                            <Divider />
                            <MenuItem style={{width: '100%'}} value="no">No</MenuItem>
                            <Divider />
                            <MenuItem style={{width: '100%'}} value="unknown/pass">Unknown/Pass</MenuItem>
                        </Select>
                    </FormControl>
                <TextField
                    name="victim_immigrant_other_specify"
                    label="If Other, please specify"
                    className={classes.textField}
                    type="text"
                    margin="normal"
                    value={this.state.victim_immigrant_other_specify}
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}

ImmigrantStatus.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(ImmigrantStatus));