import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    user: state.user,
    state,
});

class UnmetNeedsCustom extends Component {
    constructor() {
        super();
        this.state = {
            unmet_needs: '',
        }
    }

    handleChangeFor = (event) => {
        const target = event.target;
        const value = target.type === ('checkbox') ? target.checked : target.value;

        this.setState({
            unmet_needs: value
        });
    }

    render (){
        return (

            <div>
                <h4> Custom Un-Met Needs Report: </h4>
                < form value = { this.state.unmet_needs }
                onClick = { this.handleChangeFor } >

                        <input type="checkbox" 
                            id = "unmet_need_financial"
                            value = "unmet_need_financial"
                        />
                        < label htmlFor = "unmet_need_financial" >
                            Financial
                        </label>

                        <input type="checkbox" 
                            id = "unmet_need_shelter_housing"
                            value = "unmet_need_shelter_housing"
                        />
                        < label htmlFor = "unmet_need_shelter_housing" >
                            Shelter/Housing
                        </label>

                        <input type="checkbox" 
                            id = "unmet_need_other"
                            value = "unmet_need_other"
                        />
                        < label htmlFor = "unmet_need_other" >
                            Other
                        </label>
                </form>
            </div>
        )
    
    }//end render
}// end class

export default connect(mapStateToProps)(UnmetNeedsCustom)