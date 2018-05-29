import React, { Component } from 'react';
import { connect } from 'react-redux';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import AdminNav from '../Nav/AdminNav/AdminNav';
import UserEntryPageList from './UserEntryPageList';
import axios from 'axios';

const mapStateToProps = state => ({
  user: state.user,
  state,
});

class UserEntryPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      user_type: false,
      message: '',
    };
  }

  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
      this.props.dispatch({
        type: 'GET_USERS_SAGA'    
    });
   }
  
  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('login');
    };
  }

  registerUser = (event) => {
    event.preventDefault();
    console.log("clicked add new user submit button");
    if (this.state.username === '' || this.state.password === '') {
      this.setState({
        message: 'Choose a username and password!',
      });
    } else {
      const config = {
        headers: new Headers({ 'Content-Type': 'application/json' }),
        withCredentials: true,
       }
       const body = {
          username: this.state.username,
          password: this.state.password,
          user_type: this.state.user_type,
        }
        axios.post ('/api/user/register/new', body, config)
        .then((response) => {
          if (response.status === 201) {
            alert("You successfully added the new user!");
            this.props.dispatch({
              type: 'GET_USERS_SAGA'   
          });
          this.setState({
            username: '',
            password: '',
            user_type: false,
            message: '',
          })
          } else {
            this.setState({
              message: 'Ooops! That username might be in use already. Please try again!',
            });
          }
        })
        .catch(() => {
          this.setState({
            message: 'Whoops! Something went wrong... It may be you are not logged in with an Admin account or that the server on Heroku is being restarted. If you are sure about your account, please wait a few minutes for Heroku and try again.',
          });
        });
      }
    }

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    })
  }

  renderAlert() {
    if (this.state.message !== '') {
      return (
        <h2
          className="alert"
          role="alert"
        >
          {this.state.message}
        </h2>
      );
    }
    return (<span />);
  }

  render() {

    const userEntryPageList = this.props.state.getUsersReducer.map((user) => {
      return (<UserEntryPageList key={user.id} user={user}/>)
    })

      let content = null;

      //TODO: update this if statement to be true when the logged-in user is user_type === true
      if(this.props.user) {
        content = (
      <div>
        <AdminNav />
        <h1>User Entry Page</h1>
        {this.renderAlert()}
          <form>
            <h2>Add a new user:</h2>
            <div>
              <label htmlFor="username">
                Username:
                <input
                  type="text"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleInputChangeFor('username')}
                />
              </label>
            </div>
            <div>
              <label htmlFor="password">
                Password:
                <input
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleInputChangeFor('password')}
                />
              </label>
              </div>
              </form>
            <label>
              User type:
            </label>
           <form
             value={this.state.user_type}
                  onChange={this.handleInputChangeFor('user_type')}>
                <input
                  type="radio"
                  id="user_type_admin"
                  name="user_type"
                  value={true}/>
                  <label htmlFor="user_type_admin">Admin</label>
                  <input
                  type="radio"
                  id="user_type_standard"
                  name="user_type"
                  value={false}/>
                  <label htmlFor="user_type_standard">Standard</label>
            <div>
              <button
                name="submit"
                onClick={this.registerUser}
              >
              Submit</button>
            </div>
          </form>
        <div>
          <h3>Current users:</h3>
        </div>
        <div>

          { userEntryPageList }

        </div>
      </div>
    );
  }
  
    return (
      <div style={{float: "right"}}>
        { content }
      </div>
    );
  }
}


export default connect(mapStateToProps)(UserEntryPage);