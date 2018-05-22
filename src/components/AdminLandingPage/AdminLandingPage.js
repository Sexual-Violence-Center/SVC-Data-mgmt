import React, { Component } from 'react';
import { connect } from 'react-redux';

class AdminLandingPage extends Component {

  render(){
    return (
      <div>
        <div>
          <h1>Instructions</h1>
        </div>
        <div>
          <h2>Welcome!</h2>
          <p>
            From here you can view the Federal or County reports by clicking the buttons on the left hand side of your screen. You also have access to the Data Entry View. The "Search/Update" button allows you to enter a confirmation number for a form that has already been entered so you can view the information that is in that specific form.
          </p>
        </div>
      </div>
    )
  }
}

export default (AdminLandingPage);