import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    user: state.user,
    state,
});

class CustomAge extends Component {
    state = {
        startingAge: "",
        endingAge: "",
    }

    endingAgeChange = (event) => {
        event.preventDefault();
        this.setState({
            endingAge: (event.target.value)
        })
    }

    startingAgeChange = (event) => {
        event.preventDefault();
        this.setState({
            startingAge: (event.target.value)
        })
    }

    render (){

        return(
            <div>
                <h4> Custom Age Report: </h4>
            <form onSubmit={this.customAgeReport}>
                <input className="inputField" placeholder = "Starting Age"
                    type = "number" onChange = {this.startingAgeChange}
                />
                <input className="inputField" placeholder = "Ending Age"
                    type = "number" onChange = {this.endingAgeChange}
                />
            </form>
            </div>
        )
    } //end render
}//end class

export default connect(mapStateToProps)(CustomAge)