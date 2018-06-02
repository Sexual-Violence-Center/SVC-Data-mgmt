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
        this.state={
            startDate:'',
            endDate:'',
            county:'',
        }
    }

    handleChangeForStartDate = (event) => {
        const value = event.target.value;
        this.setState({
            startDate: value
        });
            this.props.dispatch({
                type: 'UPDATE_START_DATE',
                payload: { startDate: value }
            })
    }

    handleChangeForEndDate = (event) => {
        const value = event.target.value;
        this.setState({
            endDate: value
        });
        this.props.dispatch({
            //TODO: FIX this to remove from redux state
            type: 'UPDATE_END_DATE',
            payload: { endDate: value }
        })
    }

    submitCustomReport = (event) => {
        event.preventDefault();        
        if (this.state.startDate === '' || this.state.endDate === '') {
            this.setState({
                isOpen: true
            });
        } else {
            this.props.dispatch({
                type: 'SUBMIT_CUSTOM_REQUEST',
                payload: {
                    ...this.props.state.CustomReportInputReducer
                }
            })
            this.props.history.push("/custom_report_output");
        }
        console.log(this.state)
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
                <form onSubmit={this.submitCustomReport}>
                    <div style={{float: "left", padding: "10px"}}>
            
                        <TextField
                                name="startDate"
                            label=" Start Date"
                            className={this.props.textField}
                            type="date"
                            margin="normal"
                            value={this.state.startDate}
                            onChange={this.handleChangeForStartDate}
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
                            value={this.state.endDate}
                            onChange={this.handleChangeForEndDate}
                            InputLabelProps={{
                                shrink: true,
                            }}/>
                        </div>
                <br />
                <Button
                        name="submit"
                        variant="flat"
                        color="primary"
                        onClick={this.submitCustomReport}
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
