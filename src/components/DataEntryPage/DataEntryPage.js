import React, { Component } from 'react';
import AdminDataEntryNav from '../Nav/DataEntryNav/AdminDataEntryNav';


class DataEntryPage extends Component {
    render(){
        return (
          <div>
              <AdminDataEntryNav />
            <div>
              <h1>Instructions</h1>
            </div>
            <div>
              <h2>Welcome!</h2>
              <p>
                SVC input forms are color coded to represent the type of service that was provided. Pink forms are for telephone services, and <br/>
                yellow is for in-person services.
                <br />
                <br/>
                The required data entry portal for your form can be found on the left hand side of your screen. Select the form that matches the type <br/>
                of form you're entering.
              </p>
            </div>
          </div>
        )
      }
    }

export default DataEntryPage;