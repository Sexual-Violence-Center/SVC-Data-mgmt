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
        const value = target.type === ('checkbox') ? target.checked : target.value;

        this.setState({
            contact_gendertype: value
        });
        
     }

    render () {

        return(
            <div>
                <h4> Custom Gender Report: </h4>
                <form value={this.state.contact_gendertype} 
                    onClick={this.handleChangeFor}
                >
                <input type="checkbox" 
                    id = "victim_gender_male"
                    value="victim_gender_male"
                />
                    <label htmlFor="victim_gender_male">
                        Male                    
                    </label>

                <input type="checkbox" 
                    id = "victim_gender_female"
                    value="victim_gender_female"
                />
                    <label htmlFor="victim_gender_female">
                        Female
                    </label>

                <input type="checkbox" 
                    id = "victim_gender_non_binary"
                    value="victim_gender_non_binary"
                />
                    <label htmlFor="victim_gender_non_binary">
                        Non-Binary
                    </label>

                <input type="checkbox" 
                    id = "victim_gender_other"
                    value = "victim_gender_other"
                />
                    <label htmlFor = "victim_gender_other">
                        Other
                    </label>

                <input type="checkbox" 
                    id = "victim_gender_not_reported"
                    value = "victim_gender_not_reported"
                />
                    <label htmlFor = "victim_gender_not_reported">
                        Not Reported
                    </label>

                <input type="checkbox" 
                    id = "total_gender_count"
                    value="total_gender_count" 
                />
                    <label htmlFor="total_gender_count">
                        Total
                    </label>

                </form>
            </div>
        )
    } //end render
}//end class

export default connect(mapStateToProps)(CustomGender)