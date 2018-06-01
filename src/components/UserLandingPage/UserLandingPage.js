import React, { Component } from 'react';
import UserNav from '../Nav/UserNav/UserNav';
import { Typography, Card, Paper, Divider, Grid } from '@material-ui/core';
import { teal, grey } from '@material-ui/core/colors';

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

class UserLandingPage extends Component {

  render() {
    return (
      <div>
        <UserNav />
        <div style={{ float: "right", marginRight: '50px', marginTop: '20px' }}>
          <Grid container>
            <Grid item xs={6} sm={6}></Grid>
            <Grid item xs={6} sm={6} md={12} lg={12} xl={12}>
              <Paper style={style.paper}>
                <Card style={style.titleCard}>
                  <Typography variant="display2" style={{ textAlign: 'center', color: grey[50] }}>
                    Welcome!
              </Typography>
                </Card>
                <Card style={style.card}>
                  <Typography variant="display1" style={{ textAlign: 'center' }}>
                    Instructions
              </Typography>
                  <br />
                  <Divider />
                  <br />
                  <Typography variant="subheading">
                    SVC contact forms are color coded to represent the type of service provided. 
                    <br />    - Pink forms are for telephone contacts.
                     <br />   - Yellow form are for in-person contacts.
                  <br />
                    <br />
                    Select the form option on the left that matches the type of form you are entering.
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

export default (UserLandingPage);