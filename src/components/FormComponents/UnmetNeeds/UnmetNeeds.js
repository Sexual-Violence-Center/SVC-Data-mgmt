import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    state
});

class UnmetNeeds extends Component {
    constructor(){
        super();
        this.state = {
            unmet_need_financial: '',
            unmet_need_shelter_housing: '',
            unmet_need_other: '',
            unmet_need_staying_where: '',
            unmet_other_descr: ''
        }
    }

    handleChangeFor = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
        this.props.dispatch({
            type: 'ENTRY_FORM_DATA', 
            payload: {...this.state, [name]: value }
        })
    }

    render() {
        return (
            <div className="unmetNeeds">
                <h2>Unmet Needs</h2>
                <div className="unmetNeedsContainer">
                    <label>Were there any unmet needs for this individual?</label>
                    <br />
                    <br />
                    <input type="checkbox" id="unmet_need_financial" name="unmet_need_financial" value={this.state.unmet_need_financial} onChange={this.handleChangeFor}/><label htmlFor="unmet_need_financial">Financial</label>
                    <br />
                    <input type="checkbox" id="unmet_need_shelter_housing" name="unmet_need_shelter_housing" value={this.state.unmet_need_shelter_housing} onChange={this.handleChangeFor}/><label htmlFor="unmet_need_shelter_housing">Shelter/Housing</label>
                    <br />
                    <input type="checkbox" id="unmet_need_other" name="unmet_need_other" value={this.state.unmet_need_other} onChange={this.handleChangeFor}/><label htmlFor="unmet_need_other">Other</label>
                    <br />
                    <label htmlFor="unmet_other_descr">
                        specify other:
                    <input type="text" id="unmet_other_descr" name="unmet_other_descr" value={this.state.unmet_other_descr} onChange={this.handleChangeFor}/>
                    </label>
                    <br />

                    <label htmlFor="unmet_need_staying_where">If shelter was unavailable, where did the v/s stay?</label>
                    <input type="text" id="unmet_need_staying_where" name="unmet_need_staying_where" value={this.state.unmet_need_staying_where} onChange={this.handleChangeFor}/>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(UnmetNeeds);