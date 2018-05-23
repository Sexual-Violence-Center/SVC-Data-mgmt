import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserEntryPageList from './UserEntryPageList';

const mapStateToProps = state => ({
  state
})

class UserEntryPage extends Component {


  render(){
    return (
      <div>
        <div>
         <h1>User Entry Page</h1>
        </div>
        <div>
          REGISTRATION with confirmation alert <br/><br/>
          Email: <br/>
          Password: <br/>
          User type: radios ...Admin ...Standard <br/>
          Submit button
        </div>

        <UserEntryPageList />

      </div>
    )
  }
}

export default connect(mapStateToProps)(UserEntryPage);