import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    user: state.user,
    state,
});

class SupportOnCallCustom extends Component {
    constructor() {
        super();
        this.state = {
            supported_on_call: '',
        }
    }

    handleChangeFor = (event) => {
        const target = event.target;
        const value = target.type === ('checkbox') ? target.checked : target.value;

        this.setState({
            supported_on_call: value
        });
    }

    render (){
        return (

            <div>
                <h4> Custom Supported On Call Report: </h4>
                < form value = {
                    this.state.supported_on_call
                }
                onClick = {
                    this.handleChangeFor
                } >
                        <input type="checkbox" 
                            id = "supported_on_call_yes"
                            value = "supported_on_call_yes"
                        />
                        < label htmlFor = "supported_on_call_yes" >
                            Yes
                        </label>

                        <input type="checkbox" 
                            id = "supported_on_call_no"
                            value = "supported_on_call_no"
                        />
                        < label htmlFor = "supported_on_call_no" >
                            No
                        </label>

                        <input type="checkbox" 
                            id = "supported_on_call_unknown"
                            value = "supported_on_call_unknown"
                        />
                        < label htmlFor = "supported_on_call_unknown" >
                            Unknown
                        </label>
                </form>
            </div>
        )
    
    }//end render
}// end class

export default connect(mapStateToProps)(SupportOnCallCustom)