import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    user: state.user,
    state,
});

class CustomGender extends Component {
    constructor() {
        super();
        this.state = {
            contact_gendertype: '',
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

     SubmitGenderCustom = (event) => {
         console.log('clicked submit GenderCustom Report');
         event.preventDefault();
        // TODO: this.props.dispatch({ sage and reducer to be added})
     }

    render () {

        return(
            <div>
                <h4> Custom Gender Report: </h4>
                <form value={this.state.gender} 
                    onClick={this.handleChangeFor}
                    onSubmit={this.SubmitGenderCustom}
                    >
                <input type="checkbox" 
                        id = "victim_gender_male"
                        name = "gender"
                        value="victim_gender_male"/>
                    <label htmlFor="victim_gender_male">
                        Male                    
                    </label>

                <input type="checkbox" 
                        id = "victim_gender_female"
                        name = "gender"
                        value="victim_gender_female"/>
                    <label htmlFor="victim_gender_female">
                        Female
                    </label>

                <input type="checkbox" 
                        id = "victim_gender_non_binary"
                        name = "gender"
                        value="victim_gender_non_binary"/>
                    <label htmlFor="victim_gender_non_binary">
                        Non-Binary
                    </label>

                <input type="checkbox" 
                        id = "victim_gender_other"
                        name = "gender"
                        value = "victim_gender_other"/>
                    <label htmlFor = "victim_gender_other">
                        Other
                    </label>

                <input type="checkbox" 
                        id = "victim_gender_not_reported"
                        name="gender" 
                        value = "victim_gender_not_reported"/>
                    <label htmlFor = "victim_gender_not_reported">
                        Not Reported
                    </label>

                <input type="checkbox" 
                        id = "total_gender_count"
                        name="gender" 
                        value="total_gender_count" />
                    <label htmlFor="total_gender_count">
                        Total
                    </label>

                <input type="submit" />
                </form>
            </div>
        )
    } //end render
}//end class

export default connect(mapStateToProps)(CustomGender)