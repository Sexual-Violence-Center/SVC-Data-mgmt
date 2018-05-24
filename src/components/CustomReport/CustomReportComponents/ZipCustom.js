import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    user: state.user,
    state,
});

class ZipCodeCustom extends Component {
    state = {
        zip_code: "",
        endingAge: "",
    }

    endingZipCode = (event) => {
        event.preventDefault();
        this.setState({
            zip_code: (event.target.value)
        })
    }

    

    render (){

        return(
            <div>
                <h4> Custom Age Report: </h4>
                <input className="inputField" placeholder = "Zip Code"
                    type = "number" onChange = {this.endingZipCode}
                />
            </div>
        )
    } //end render
}//end class

export default connect(mapStateToProps)(ZipCodeCustom)