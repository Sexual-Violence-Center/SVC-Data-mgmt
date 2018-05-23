import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    user: state.user,
    state,
});

class CustomContactType extends Component {
    constructor() {
        super();
        this.state = {
            contact_type: '',
        }
    }

     handleChangeFor = (event) => {
        const target = event.target;
        const value = target.type === ('radio') ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
        
     }

     contactTypeCustom = (event) => {
         console.log('clicked submit contactTypeCustom Report');
         event.preventDefault();
        // TODO: this.props.dispatch({ sage and reducer to be added})
     }

    render () {

        return(
            <div>
                <h4> Custom Contact Type Report: </h4>
                <form value={this.state.contactType} 
                    onClick={this.handleChangeFor}
                    onSubmit={this.contactTypeCustom}
                    >
                <input type="radio" 
                        id="phone_contact" 
                        name="contact_type" 
                        value="phone_contact"/>
                    <label htmlFor="phone_contact">
                        In-Person
                    </label>
                <input type="radio" 
                        id="in_person_contact" 
                        name="contact_type" 
                        value="in_person_contact" />
                    <label htmlFor="in_person_contact">
                        Telephone
                    </label>
                <input type="submit" />
                </form>
            </div>
        )
    } //end render
}//end class

export default connect(mapStateToProps)(CustomContactType)

    