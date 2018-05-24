import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    user: state.user,
    state,
});

class RaceEthnicityCustom extends Component {
    constructor() {
        super();
        this.state = {
            race_ethnicity: '',
        }
    }

    handleChangeFor = (event) => {
        const target = event.target;
        const value = target.type === ('checkbox') ? target.checked : target.value;

        this.setState({
            race_ethnicity: value
        });
    }

    render (){
        return (

            <div>
                <h4> Custom Race/Ethnicity Report: </h4>
                <form value={this.state.race_ethnicity} onClick={this.handleChangeFor} >
                        <input type="checkbox" 
                            id = "victim_ethnicity_asian"
                            value = "victim_ethnicity_asian"
                        />
                        < label htmlFor = "victim_ethnicity_asian" >
                            Asian
                        </label>

                        <input type="checkbox" 
                            id = "AfricanAmericanBlack"
                            value = "AfricanAmericanBlack"
                        />
                        < label htmlFor = "AfricanAmericanBlack" >
                            African American/Black
                        </label>

                        <input type="checkbox" 
                            id = "ChicanoLatino"
                            value = "ChicanoLatino"
                        />
                        < label htmlFor = "ChicanoLatino" >
                            Chican@/Latin@
                        </label>

                        <input type="checkbox" 
                            id = "MultiRacial"
                            value = "MultiRacial"
                        />
                        < label htmlFor = "MultiRacial" >
                            Multi-racial
                        </label>

                        <input type="checkbox" 
                            id = "NativeAmerican"
                            value = "NativeAmerican"
                        />
                        < label htmlFor = "NativeAmerican" >
                            Native American
                        </label>

                        <input type="checkbox" 
                            id = "NativeHawaiianPacificIslander"
                            value = "NativeHawaiianPacificIslander"
                        />
                        < label htmlFor = "NativeHawaiianPacificIslander" >
                            Native Hawaiian/Pacific Islander
                        </label>

                              <input type="checkbox" 
                            id = "WhiteNonLatinoCaucasian"
                            value = "WhiteNonLatinoCaucasian"
                        />
                        < label htmlFor = "WhiteNonLatinoCaucasian" >
                            White Non-Latino/Caucasian
                        </label>

                        <input type="checkbox" 
                            id = "Other"
                            value = "Other"
                        />
                        < label htmlFor = "Other" >
                            Other
                        </label>

                        <input type="checkbox" 
                            id = "unknown"
                            value = "unknown"
                        />
                        < label htmlFor = "unknown" >
                            Unknown/Pass
                        </label>

                        <input type="checkbox" 
                            id = "total_ethnicity"
                            value = "total_ethnicity"
                        />
                        < label htmlFor = "total_ethnicity" >
                            Race/Ethnicity Total
                        </label>
                </form>
            </div>
        )
    
    }//end render
}// end class

export default connect(mapStateToProps)(RaceEthnicityCustom)