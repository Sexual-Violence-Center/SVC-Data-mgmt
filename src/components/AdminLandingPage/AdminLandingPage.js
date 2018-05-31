import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminNav from "../Nav/AdminNav/AdminNav";
import { USER_ACTIONS } from '../../redux/actions/userActions';
import { Card, Paper, Typography, Divider, Grid } from '@material-ui/core';
import { teal, grey } from '@material-ui/core/colors';

const mapStateToProps = state => ({
  user: state.user,
});

const style = {
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
    backgroundColor: grey[300]
  }
}

class AdminLandingPage extends Component {
  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
  }
  render() {
    return (
      <div>
        <AdminNav />
        <div style={{ float: "right", marginRight: '70px', marginTop: '20px' }}>
          <Grid container>
          <Grid item xs={6} sm={6}></Grid>
            <Grid item xs={6} sm={6} md={12} lg={12} xl={12}>
              <Paper style={style.paper}>
                <Card style={style.titleCard}>
                  <Typography variant="display1" style={{ textAlign: 'center', color: grey[50] }}>
                    Welcome!
              </Typography>
                </Card>
                <Card style={style.card}>
                  <Typography variant="headline" style={{ textAlign: 'center' }}>
                    Instructions
              </Typography>
                  <br />
                  <Divider />
                  <br />
                  <Typography variant="subheading">
                    Access to the administrator views is provided by clicking items under REPORTS and ACTIONS on the navigation bar to the left.
                <br />
                    <br />Clicking Federal or County displays the selected report.
                <br />
                    <br /> Clicking Custom allows an admin to select various reporting criteria for reviewing.
                <br />
                    <br /> Clicking Data Entry provides an admin with the basic user view, where data can be entered for the "pink and yellow forms".
                <br />
                    <br /> Clicking Search Reports allows an admin to bring up a specific record
                <br /> (by typing the record's confirmation number) for reviewing, editing, or deleting.
                <br />
                    <br /> Clicking Users allows an admin to add or delete a user (username, password, user type) from the application.
              </Typography>
                </Card>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(AdminLandingPage);