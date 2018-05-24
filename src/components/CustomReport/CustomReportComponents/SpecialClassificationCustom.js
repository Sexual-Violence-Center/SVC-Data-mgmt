import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    user: state.user,
    state,
});

class SpecialClassificationCustom extends Component {
    constructor() {
        super();
        this.state = {
            special_classification: '',
        }
    }

    handleChangeFor = (event) => {
        const target = event.target;
        const value = target.type === ('checkbox') ? target.checked : target.value;

        this.setState({
            special_classification: value
        });
    }

    render (){
        return (

            <div>
                <h4> Custom Special Classification of Victims Report: </h4>
                <form value={this.state.special_classification} onClick={this.handleChangeFor} >
                        <input type="checkbox" 
                            id = "disability_deaf"
                            value = "disability_deaf"
                        />
                        < label htmlFor = "disability_deaf" >
                            Deaf/Heard of Hearing
                        </label>

                        <input type="checkbox" 
                            id = "homeless"
                            value = "homeless"
                        />
                        < label htmlFor = "homeless" >
                            Homeless
                        </label>

                        <input type="checkbox" 
                            id = "victim_immigrant"
                            value = "victim_immigrant"
                        />
                        < label htmlFor = "victim_immigrant" >
                            Immigrants/Refugees/Asylum Seekers
                        </label>

                        <input type="checkbox" 
                            id = "lgbtq"
                            value = "lgbtq"
                        />
                        < label htmlFor = "lgbtq" >
                            LGBTQ
                        </label>

                        <input type="checkbox" 
                            id = "veteran"
                            value = "veteran"
                        />
                        < label htmlFor = "veteran" >
                            Veterans
                        </label>

                        <input type="checkbox" 
                            id = "limited_english"
                            value = "limited_english"
                        />
                        < label htmlFor = "limited_english" >
                            Victims with Limited English Proficiency
                        </label>

                        <input type="checkbox" 
                            id = "victims_with_disabilities"
                            value = "victims_with_disabilities"
                        />
                        < label htmlFor = "victims_with_disabilities" >
                            Victims with Disabilities
                        </label>

                        <input type="checkbox" 
                            id = "victim_multiple_types_violence"
                            value = "victim_multiple_types_violence"
                        />
                        < label htmlFor = "victim_multiple_types_violence" >
                            Victims with 2 or More Types of Victimization
                        </label>

                </form>
            </div>
        )
    
    }//end render
}// end class

export default connect(mapStateToProps)(SpecialClassificationCustom)