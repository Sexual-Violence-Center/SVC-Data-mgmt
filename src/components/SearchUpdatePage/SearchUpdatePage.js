import React, { Component } from 'react';
import { connect } from "react-redux";
import AdminToolsNav from '../Nav/AdminToolsNav/AdminToolsNav';


const mapStateToProps = state => ({
  state
});

class SearchUpdatePage extends Component {
    constructor(){
        super();
        this.state={
            userInput: ''
        }
    }
    handleChangeFor=(event)=>{
        this.setState({
            userInput: event.target.value
        })
    }

    handleSubmit=()=>{
        this.props.dispatch({
            type: 'FORM_SEARCH',
            payload: this.state.userInput
        })
    }



    render(){
        return <div>
            <AdminToolsNav />
            <h1>Search and Update</h1>
            <form>
              <label>
                Search for a Form:
                <input type="text" name="userInput" value={this.state.userInput} onChange={this.handleChangeFor} />
              </label>
            </form>
            <button onClick={this.handleSubmit}>Submit</button>
          </div>;
    }
}

export default connect(mapStateToProps)(SearchUpdatePage);