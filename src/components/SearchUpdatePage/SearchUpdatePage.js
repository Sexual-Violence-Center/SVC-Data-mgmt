import React, { Component } from 'react';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import AdminNav from '../Nav/AdminNav/AdminNav';
import { connect } from "react-redux";
import UpdateForm from './UpdateForm';


const mapStateToProps = state => ({
    user: state.user,
    state
});

class SearchUpdatePage extends Component {
    constructor() {
        super();
        this.state = {
            userInput: ''
        }
    }
    //gets user info on load
    componentDidMount(){
        this.props.dispatch({type: USER_ACTIONS.FETCH_USER});
    }
    // sets input to state
    handleChangeFor = (event) => {
        this.setState({
            userInput: event.target.value
            
        })
    }
    // calls saga
    handleSubmit = () => {
        this.props.dispatch({
            type: 'FORM_SEARCH',
            payload: this.state.userInput
        })
    }
    
    // if there is data in the reducer it means the user searched for something
    //shows form if true
    renderForm = () => {

        if (this.props.state.updateFormReducer && this.props.state.updateFormReducer.id) {
            return <UpdateForm 
            userInput= {this.state.userInput}
            />
        }
    }



    render() {
        return <div>
            <AdminNav />
            <div style={{ flex: 1, margin: "auto", alignItems: "center", marginLeft: "300px" }}>
              <h1>Search and Update</h1>
              <form>
                <label>
                  Search for a Form:
                  <input type="text" name="userInput" value={this.state.userInput} onChange={this.handleChangeFor} />
                </label>
              </form>
              <button value="submit" onClick={this.handleSubmit}>
                Submit
              </button>
              {this.renderForm()}
            </div>
          </div>;
    }
}

export default connect(mapStateToProps)(SearchUpdatePage);