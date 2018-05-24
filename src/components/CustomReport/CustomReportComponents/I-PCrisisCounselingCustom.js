import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    user: state.user,
    state,
});

class CrisisCounseling extends Component {
    constructor() {
        super();
        this.state = {
            crisis_counseling: '',
        }
    }

    handleChangeFor = (event) => {
        const target = event.target;
        const value = target.type === ('checkbox') ? target.checked : target.value;

        this.setState({
            crisis_counseling: value
        });
    }

    render (){
        return (

            <div>
                <h4> Custom Crisis Counseling Report: </h4>
                <form value={this.state.crisis_counseling} onClick={this.handleChangeFor} >
                        <input type="checkbox" 
                            id = "crisis_counseling_individual"
                            value = "crisis_counseling_individual"
                        />
                        < label htmlFor = "crisis_counseling_individual" >
                            One-on-One Counseling
                        </label>

                        <input type="checkbox" 
                            id = "crisis_counseling_group"
                            value = "crisis_counseling_group"
                        />
                        < label htmlFor = "crisis_counseling_group" >
                            Group Counseling
                        </label>
                </form>
            </div>
        )
    
    }//end render
}// end class

export default connect(mapStateToProps)(CrisisCounseling)