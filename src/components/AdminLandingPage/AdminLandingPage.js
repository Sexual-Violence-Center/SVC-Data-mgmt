import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Header from '../../components/Header/Header';
import AdminNav from "../Nav/AdminNav/AdminNav";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const mapStateToProps = state => ({
  user: state.user,
});

class AdminLandingPage extends Component {
  
  render(){

    return (
      <div>
        <div>
          {/* <Header title="SVC" /> */}
          <AdminNav />
        </div>
        <div>
          <h1>Instructions</h1>
        </div>
        <div>
          <h2>Welcome</h2>
          <p>
            Access to the administrator views is provided by clicking items under REPORTS and ACTIONS on the navigation bar to the left. <br/>Clicking Federal or County displays the selected report. <br/> Clicking Custom allows an admin to select various reporting criteria for reviewing.
            <br/> Clicking Data Entry provides an admin with the basic user view, where data can be entered for the "pink and yellow forms".
            <br/> Clicking Search Reports allows an admin to bring up a specific record (by typing the record's confirmation number) for reviewing, editing, or deleting.
            <br/> Clicking Users allows an admin to add or delete a user (username, password, user type) from the application.
          </p>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(AdminLandingPage);