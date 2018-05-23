import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  state
})

class UserEntryPageList extends Component {

  handleDelete = () => {
    console.log('clicked delete button', this.props.user);
    this.props.dispatch({
      type: 'DELETE_USER_SAGA',
      payload: this.props.user
    })
  }

  render(){

    let user_type;
      if(this.props.user.user_type === true) {
        user_type = <p>Admin</p>
      } else if(this.props.user.user_type === false) {
        user_type = <p>Standard</p>
      } else {
        user_type = <p></p>
      };

    return (
 
        <div>
          <table>
            <tbody>
              <tr>
                <td>{this.props.user.username}</td>
                <td>{user_type}</td>
                <td><button onClick={this.handleDelete}>Delete</button></td>
              </tr>
            </tbody>
          </table>
      </div>
    )
  }
}

export default connect(mapStateToProps)(UserEntryPageList);