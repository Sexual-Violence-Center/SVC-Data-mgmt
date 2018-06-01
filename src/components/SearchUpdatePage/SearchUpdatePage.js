import React, { Component } from 'react';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import AdminNav from '../Nav/AdminNav/AdminNav';
import UpdateForm from './UpdateForm';


import { Grid, Typography, Toolbar, AppBar, Paper, Card, TextField, Button } from '@material-ui/core';
import { teal, grey } from '@material-ui/core/colors';


const mapStateToProps = state => ({
    user: state.user,
    state
});

const styles = theme => ({
    card: {
        padding: '20px',
        margin: '10px'
    },
    titleCard: {
        color: grey[50],
        backgroundColor: teal[300],
        padding: '20px',
        margin: '10px'
    },
    paper: {
        padding: '10px',
        backgroundColor: grey[300],
        marginTop: '20px'
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
});

class SearchUpdatePage extends Component {
    constructor() {
        super();
        this.state = {
            userInput: ''
        }
    }
    //gets user info on load
    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
    }
    // sets input to state
    handleUserInput = (event) => {
        this.setState({
            userInput: event.target.value

        })
    }
    // calls saga
    handleSubmit = () => {
        this.props.dispatch({
            type: 'FORM_SEARCH',
            payload: this.state.userInput
        })
    }

    // if there is data in the reducer it means the user searched for something
    //shows form if true
    renderForm = () => {

        if (this.props.state.updateFormReducer && this.props.state.updateFormReducer.id) {
            return <UpdateForm
                userInput={this.state.userInput}
            />
        }
    }



    render() {
        const { classes } = this.props;
        return <div>
            <AdminNav />
            <Grid container direction="row" justify="space-between" alignItems="center">
                <Grid item sm={3}></Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>
                        <div>
                            <Card className={classes.titleCard}>
                                <Typography Typography variant="display1" style={{ textAlign: 'center', color: grey[50] }}>
                                    Search and Update
                                </Typography>
                            </Card>
                            <Card className={classes.card}>
                                <div>
                                    <TextField
                                        name="userInput"
                                        label="Search for a Form"
                                        className={classes.textField}
                                        type="text"
                                        margin="normal"
                                        value={this.state.userInput}
                                        onChange={this.handleUserInput}
                                    />
                                </div>
                                <div style={{ float: 'right' }}>
                                    <Button value="submit" variant="raised" onClick={this.handleSubmit}>
                                        Submit
                                </Button>
                                </div>
                            </Card>
                            {this.renderForm()}
                        </div>
                    </Paper>
                </Grid>
                <Grid item sm={3}></Grid>
            </Grid>
        </div>;
    }
}

SearchUpdatePage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(SearchUpdatePage));