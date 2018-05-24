import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    user: state.user,
    state,
});

class TypesOfVictimizationCustom extends Component {
    constructor() {
        super();
        this.state = {
            types_of_victimization: '',
        }
    }

    handleChangeFor = (event) => {
        const target = event.target;
        const value = target.type === ('checkbox') ? target.checked : target.value;

        this.setState({
            types_of_victimization: value
        });
    }

    render (){
        return (

            <div>
                <h4> Custom Types of Victimication Report: </h4>
                < form value = { this.state.types_of_victimization }
                onClick = { this.handleChangeFor } >

                        <input type="checkbox" 
                            id = "violence_adult_sexual"
                            value = "violence_adult_sexual"
                        />
                        < label htmlFor = "violence_adult_sexual" >
                            Adult Sexual Assault
                        </label>

                        <input type="checkbox" 
                            id = "violence_adult_when_child_by_family"
                            value = "violence_adult_when_child_by_family"
                        />
                        < label htmlFor = "violence_adult_when_child_by_family" >
                            Adult Sexually as Child Abused/Assaulted by Family
                        </label>

                        <input type="checkbox" 
                            id = "violence_adult_when_child_by_other"
                            value = "violence_adult_when_child_by_other"
                        />
                        < label htmlFor = "violence_adult_when_child_by_other" >
                            Adult Sexually as Child Abused/Assaulted by Other
                        </label>

                        <input type="checkbox" 
                            id = "violence_bullying"
                            value = "violence_bullying"
                        />
                        < label htmlFor = "violence_bullying" >
                            Bullying
                        </label>

                        <input type="checkbox" 
                            id = "violence_child_pornography"
                            value = "violence_child_pornography"
                        />
                        < label htmlFor = "violence_child_pornography" >
                            Child Pornography
                        </label>

                        <input type="checkbox" 
                            id = "violence_minor_by_family"
                            value = "violence_minor_by_family"
                        />
                        < label htmlFor = "violence_adult_when_child_by_family" >
                            Child Sexual Abuse/Assault by Family
                        </label>

                        <input type="checkbox" 
                            id = "violence_minor_by_other"
                            value = "violence_minor_by_other"
                        />
                        < label htmlFor = "violence_minor_by_other" >
                            Child Sexual Abuse / Assault by Other
                        </label>

                        <input type="checkbox" 
                            id = "violence_domestic"
                            value = "violence_domestic"
                        />
                        < label htmlFor = "violence_domestic" >
                            Domestic And/Or Family Violence
                        </label>

                        <input type="checkbox" 
                            id = "violence_elder"
                            value = "violence_elder"
                        />
                        < label htmlFor = "violence_elder" >
                            Elder Abuse or Neglect
                        </label>

                        <input type="checkbox" 
                            id = "violence_exploitation_trafficking"
                            value = "violence_exploitation_trafficking"
                        />
                        < label htmlFor = "violence_minor_by_other" >
                            Sex Trafficking
                        </label>

                        <input type="checkbox" 
                            id = "violence_exposing"
                            value = "violence_exposing"
                        />
                        < label htmlFor = "violence_exposing" >
                            Stalking/Harassment - Exposing
                        </label>

                         <input type="checkbox" 
                            id = "violence_internet"
                            value = "violence_internet"
                        />
                        < label htmlFor = "violence_internet" >
                           Stalking/Harassment - Internet
                        </label>

                        <input type="checkbox" 
                            id = "violence_phone"
                            value = "violence_phone"
                        />
                        < label htmlFor = "violence_phone" >
                            Stalking/Harassment - Phone
                        </label>

                        <input type="checkbox" 
                            id = "violence_harassment"
                            value = "violence_harassment"
                        />
                        < label htmlFor = "violence_harassment" >
                           Stalking/Harassment - Harassment
                        </label>

                        <input type="checkbox" 
                            id = "violence_stalking"
                            value = "violence_stalking"
                        />
                        < label htmlFor = "violence_stalking" >
                            Stalking/Harassment - Stalking
                        </label>

                        <input type="checkbox" 
                            id = "violence_stalking_harassment_total"
                            value = "violence_stalking_harassment_total"
                        />
                        < label htmlFor = "violence_stalking_harassment_total" >
                            Stalking/Harassment - Total
                        </label>

                        <input type="checkbox" 
                            id = "violence_teen_dating"
                            value = "violence_teen_dating"
                        />
                        < label htmlFor = "violence_teen_dating" >
                           Teen Dating Victimization
                        </label>

                        <input type="checkbox" 
                            id = "violence_other"
                            value = "violence_other"
                        />
                        < label htmlFor = "violence_other" >
                            Other
                        </label>

                        <input type="checkbox" 
                            id = "violence_unknown"
                            value = "violence_unknown"
                        />
                        < label htmlFor = "violence_unknown" >
                           Unknown
                        </label>

                        <input type="checkbox" 
                            id = "victim_multiple_types_violence"
                            value = "victim_multiple_types_violence"
                        />
                        < label htmlFor = "victim_multiple_types_violence" >
                            Multiple Types of Violence
                        </label>

                </form>
            </div>
        )
    
    }//end render
}// end class

export default connect(mapStateToProps)(TypesOfVictimizationCustom)