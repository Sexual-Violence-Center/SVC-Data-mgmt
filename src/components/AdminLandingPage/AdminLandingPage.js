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
                    Reporting, Admin Entry Tools, Data Entry
              </Typography>
                  <br />
                  <Divider />
                  <br />
                  <Typography variant="subheading">
                    Federal and County reporting displays the selected report.
                <br />
                    <br /> Custom reporting allows you to select various reporting criteria.
                <br />
                    <br /> User Entry allows you to create or delete a user.
                <br />
                    <br /> Search/Update allows you to bring up a specific record for reviewing, editing, or deleting.
                <br />
                    <br /> Data Entry allows you to enter Telephone (pink form) and In-Person (yellow form) contacts.
                <br />
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