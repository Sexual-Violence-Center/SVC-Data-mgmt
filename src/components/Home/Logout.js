import React, { Component } from 'react';
import { connect } from 'react-redux';

// import Nav from '../../components/Nav/Nav';
import AdminNav from '../Nav/AdminNav/AdminNav';
import UserDataEntryNav from '../Nav/DataEntryNav/UserDataEntryNav';

import { USER_ACTIONS } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';


const mapStateToProps = state => ({
  state
});

class Logout extends Component {

  // componentDidMount() {
  //   this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
  // }

  // componentDidUpdate() {
  //   if (!this.props.state.user.isLoading && this.props.state.user.userName === null) {
  //     this.props.dispatch({type:'/login'});
  //   } 
  // }

  logout = () => {
    this.props.dispatch(triggerLogout());
    this.props.dispatch({type:'/login'});
  }

  render() {
    return (
      <div>
        <button onClick={this.logout}>Logout</button>
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(Logout);
