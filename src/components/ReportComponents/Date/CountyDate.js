import React, { Component } from 'react';
import { connect } from 'react-redux';
import { USER_ACTIONS } from '../../../redux/actions/userActions';
import AdminNav from '../../Nav/AdminNav/AdminNav';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CalendarModal from '../../Modal/calendar.modal'

//Style
import { Button, TextField } from '@material-ui/core';
import { MenuItem, InputLabel, Select, FormControl, Divider, } from '@material-ui/core';

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

class CountyDate extends Component{ 
    constructor(){
        super();
        this.state={
            startDate:'',
            endDate:'',
            county:'',
        }
    }

    handleChangeFor = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        }); 
       
    }

    closeModel = () => {
        this.setState({
            isOpen: false
        });
    }

    submit = () => {
        if (this.state.startDate === '' || this.state.endDate === '') {
            this.setState({
                isOpen: true
            });
        } else {
            this.props.dispatch({
                type: 'GET_PERSON_DATA_COUNTY', 
                payload: this.state
            })
        }
    }

    print = () => {
        console.log('print button clicked');
        window.print();
    }

    componentDidMount () {
        this.props.dispatch({type: USER_ACTIONS.FETCH_USER});
        console.log(this.props.state.getCountyReducer)
    }

    render () {
        const { classes } = this.props;
        return (
            // <Card container>
            <div className="federalReport">
                <AdminNav />
                <div>
                    <h2>Select a date range and county for report</h2>
                        <div style={{float: "left", padding: "10px"}}>
                            <TextField
                                name="startDate"
                                label=" Start Date"
                                className={classes.textField}
                                type="date"
                                margin="normal"
                                value={this.state.startDate}
                                onChange={this.handleChangeFor}
                                InputLabelProps={{
                                    shrink: true,
                                }}/>
                        </div>
                        <div style={{float: "left", padding: "10px"}}>
                            <TextField
                                name="endDate"
                                label=" End Date"
                                className={classes.textField}
                                type="date"
                                margin="normal"
                                value={this.state.endDate}
                                onChange={this.handleChangeFor}
                                InputLabelProps={{
                                    shrink: true,
                                }}/>
                            </div>
                            <div style={{float: "left", padding: "10px"}}>
                            <FormControl className={classes.formControl}>
                                <InputLabel htmlFor="county">County</InputLabel>
                                <Select
                                    value={this.state.county}
                                    onChange={this.handleChangeFor}
                                    className={classes.textField}
                                    inputProps={{
                                        name: 'county',
                                        id: 'county',
                                    }}>
                                    <MenuItem style={{width: '100%'}} value="Hennepin">Hennepin</MenuItem>
                                    <Divider />
                                    <MenuItem style={{width: '100%'}} value="Scott">Scott</MenuItem>
                                    <Divider />
                                    <MenuItem style={{width: '100%'}} value="Carver">Carver</MenuItem>
                                    <Divider />
                                    <MenuItem style={{width: '100%'}} value="Other">Other</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <br />
                        <div style={{float: "left", padding: "10px"}}>
                        {/* County:
                        <select name="county" value={this.state.county} onChange={this.handleChangeFor}>
                        <option>Select One</option>
                        <option value="Hennepin">Hennepin</option>
                        <option value="Scott">Scott</option>
                        <option value="Carver">Carver</option>
                        <option value="Other">Other</option>
                        </select> */}
                        <div>
                      <Button
                        name="submit"
                        variant="flat"
                        color="primary"
                        onClick={this.submit}
                      >
                      Submit</Button>
                      <Button
                        name="submit"
                        variant="flat"
                        color="primary"
                        onClick={this.print}
                      >
                      Print</Button>
                    </div>
                    </div>
                </div>

                {this.state.isOpen === true && <CalendarModal handleClose={this.closeModel} />}

            </div>
        )
    }
}
CountyDate.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(CountyDate));
