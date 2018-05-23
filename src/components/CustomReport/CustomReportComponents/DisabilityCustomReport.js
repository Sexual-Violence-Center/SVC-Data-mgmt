import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    user: state.user,
    state,
});

class DisabilityCustom extends Component {
    constructor() {
        super();
        this.state = {
            contact_type: '',
        }
    }

     handleChangeFor = (event) => {
        const target = event.target;
        const value = target.type === ('checkbox') ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });   
     }
     
    SubmitDisabilitiesCustom = (event) => {
    console.log('clicked submit Submit DisabilitiesCustom Report');
    event.preventDefault();
    // TODO: this.props.dispatch({ sage and reducer to be added})
    }

    render () {
        return(
            <div>
            <h4> Custom Disabilities Report: </h4>
            <form value={this.state.contactType} 
                onClick={this.handleChangeFor}
                onSubmit={this.SubmitDisabilitiesCustom}>
                <input type="checkbox" name="disability_blind" 
                    value={this.state.disability_blind} onChange={this.handleChangeFor}/>
                    <label htmlFor="disability_blind">
                        Blind/Visually Impaired
                    </label>
                <br />
                <input type="checkbox" name="disability_physical" 
                    value={this.state.disability_physical} onChange={this.handleChangeFor}/>
                    <label htmlFor="disability_physical">
                        Physical Disabilities
                    </label>
                <br />
                <input type="checkbox" name="disability_mental" 
                    value={this.state.disability_mental} onChange={this.handleChangeFor}/>
                    <label htmlFor="disability_mental">
                        Mental Illness
                    </label>
                <br />
                <input type="checkbox" name="disability_deaf" 
                    value={this.state.disability_deaf} onChange={this.handleChangeFor}/>
                    <label htmlFor="disability_deaf">
                        Deaf/Hard of Hearing
                    </label>
                <br />
                <input type="checkbox" name="disability_developmental" 
                    value={this.state.disability_developmental} onChange={this.handleChangeFor}/>
                    <label htmlFor="disability_developmental">
                        Intellectual or Developmental Disabilities
                    </label>
                <br />
                <input type="checkbox" name="disability_none" 
                    value={this.state.disability_none} onChange={this.handleChangeFor}/>
                    <label htmlFor="disability_none">
                        None
                    </label>
                <br />
                <input type="checkbox" name="disability_other" 
                    value={this.state.disability_other} onChange={this.handleChangeFor}/>
                    <label htmlFor="disability_other">
                        Other
                    </label>
                    <label htmlFor="disability_other_specify">specify</label>
                <input type="text" name="disability_other_specify"  
                    value={this.state.disability_other_specify} onChange={this.handleChangeFor}/>
                <br />
                <input type="checkbox" name="disability_unknown" 
                    value={this.state.disability_unknown} onChange={this.handleChangeFor}/>
                    <label htmlFor="disability_unknown">
                        Unknown
                    </label>
                <br />
            <input type="submit" />
            </form>
            </div>
        )
    }
}

export default connect(mapStateToProps)(DisabilityCustom)