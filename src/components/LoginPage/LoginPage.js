import React, { Component } from 'react';
import { connect } from 'react-redux';
import { triggerLogin, formError, clearError } from '../../redux/actions/loginActions';
import Header from '../Header/Header';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'


const mapStateToProps = state => ({
  user: state.user,
  login: state.login,
});

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  componentDidMount() {
    this.props.dispatch(clearError());
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user.userInfo === true) {
      this.props.history.push('/adminlandingpage');
    } else if (nextProps.user.userInfo === false) {
      this.props.history.push('/userlandingpage');
    }
  }

  login = (event) => {
    event.preventDefault();

    if (this.state.username === '' || this.state.password === '') {
      this.props.dispatch(formError());
    } else {
      this.props.dispatch(triggerLogin(this.state.username, this.state.password));
    }
  }

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  renderAlert() {
    if (this.props.login.message !== '') {
      return (
        <h2
          className="alert"
          role="alert"
        >
          {this.props.login.message}
        </h2>
      );
    }
    return (<span />);
  }

  render() {
    return (
      <div>
        <AppBar>
          <Toolbar>
            <Header />
            <Typography variant="display1" color="inherit" style={{paddingLeft: '20px'}}>
              Data Management System
            </Typography>
          </Toolbar>
        </AppBar>
        <div style={{ marginTop: '100px' }}>
          {this.renderAlert()}
          <div>
            <form className="loginForm" onSubmit={this.login}>
              <h1>Login</h1>
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
              <div>
                <input
                  type="submit"
                  name="submit"
                  value="Log In"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(LoginPage);
