import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  state
})

class UserEntryPageList extends Component {


  render(){
    return (
 
      <div>
        <table>
          <thead>
            <tr>
              <th><p>Users: looping over array from GET users</p></th>
              <th><p>looping over array from GET users</p></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>username</td>
              <td>user_type</td>
              <td>delete button</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default connect(mapStateToProps)(UserEntryPageList);