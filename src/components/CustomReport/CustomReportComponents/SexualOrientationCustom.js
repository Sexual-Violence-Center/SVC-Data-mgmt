import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    user: state.user,
    state,
});

class SexualOrientationCustom extends Component {
    constructor() {
        super();
        this.state = {
            sexual_orientation: '',
        }
    }

    handleChangeFor = (event) => {
        const target = event.target;
        const value = target.type === ('checkbox') ? target.checked : target.value;

        this.setState({
            sexual_orientation: value
        });
    }

    render (){
        return (

            <div>
                <h4> Custom Sexual Orientation Report: </h4>
                <form value={this.state.sexual_orientation} onClick={this.handleChangeFor} >
                        <input type="checkbox" 
                            id = "bi_sexual"
                            value = "bi_sexual"
                        />
                        < label htmlFor = "bi_sexual" >
                            Bi-Sexual
                        </label>

                        <input type="checkbox" 
                            id = "gay"
                            value = "gay"
                        />
                        < label htmlFor = "gay" >
                            Gay
                        </label>

                        <input type="checkbox" 
                            id = "hetrosexual"
                            value = "hetrosexual"
                        />
                        < label htmlFor = "hetrosexual" >
                            Hetrosexual
                        </label>

                        <input type="checkbox" 
                            id = "lesbian"
                            value = "lesbian"
                        />
                        < label htmlFor = "lesbian" >
                            Lesbian
                        </label>

                        <input type="checkbox" 
                            id = "Other"
                            value = "Other"
                        />
                        < label htmlFor = "Other" >
                            Other
                        </label>

                </form>
            </div>
        )
    
    }//end render
}// end class

export default connect(mapStateToProps)(SexualOrientationCustom)