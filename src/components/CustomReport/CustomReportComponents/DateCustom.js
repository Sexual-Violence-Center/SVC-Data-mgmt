import React, { Component } from 'react';
import { connect } from 'react-redux';
import { USER_ACTIONS } from '../../../redux/actions/userActions';
import AdminNav from '../../Nav/AdminNav/AdminNav';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
//Style
import { Paper, Typography, Card, Button, TextField } from '@material-ui/core';
import { MenuItem, InputLabel, Select, FormControl, Divider, } from '@material-ui/core';
import { teal, grey } from '@material-ui/core/colors';

const mapStateToProps = state => ({
    user: state.user,
    county: state.getCountyReducer,
    state
});

const styles = theme => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    formControl: {
        margin: theme.spacing.unit,
        Width: 200,
    },
});

const style = {
    title: {
        backgroundColor:  teal[300],
        textAlign: 'center',
        color: 'white', 
        padding: '10px',
        
        // position: 'abosolute',
    },
    paper:{
        backgroundColor: grey[300], 
        padding: '10px',
        // margin: '50px',
        
    }
}

class DateCustom extends Component{ 
    constructor(){
        super();
    }

    
    componentDidMount () {
        this.props.dispatch({type: USER_ACTIONS.FETCH_USER});
        console.log(this.props.state.getCountyReducer)
    }

    render () {
        const { classes } = this.props;
        return (
            <div>
            <Card style={{ margin: "10px"}}>
                <Typography variant="display1" style={style.title}>
                    Custom Report
                </Typography>
            </Card>
            <Card style={{margin: "10px", padding: "20px"}}>
                <form onSubmit={this.props.submitCustomReport}>
                    <div style={{float: "left", padding: "10px"}}>
            
                        <TextField
                                name="startDate"
                            label=" Start Date"
                            className={this.props.textField}
                            type="date"
                            margin="normal"
                            value={this.props.startDate}
                            onChange={this.props.handleChangeForStartDate}
                            InputLabelProps={{
                                shrink: true,
                            }}/>
                    </div>
                    <div style={{float: "left", padding: "10px"}}>
                        <TextField
                            name="endDate"
                            label=" End Date"
                            className={this.props.textField}
                            type="date"
                            margin="normal"
                            value={this.props.endDate}
                            onChange={this.props.handleChangeForEndDate}
                            InputLabelProps={{
                                shrink: true,
                            }}/>
                        </div>
                <br />
                <Button
                        name="submit"
                        variant="flat"
                        color="primary"
                        onClick={this.props.submitCustomReport}
                      >
                      Submit</Button>
              </form>
                </Card>
                </div>
        )
    }
}
DateCustom.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(DateCustom));
