import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    user: state.user,
    state,
});

class TransgenderedCustom extends Component {
    constructor() {
        super();
        this.state = {
            transgendered: '',
        }
    }

    handleChangeFor = (event) => {
        const target = event.target;
        const value = target.type === ('checkbox') ? target.checked : target.value;

        this.setState({
            transgendered: value
        });
    }

    render (){
        return (

            <div>
                <h4> Custom Transgendered Report: </h4>
                < form value = { this.state.transgendered} 
                    onClick = { this.handleChangeFor}
                >
    
                    <input type="checkbox" 
                        id = "victim_gender_transgender"
                        value = "victim_gender_transgender"
                    />
                    < label htmlFor = "victim_gender_transgender" >
                        Transgendered
                    </label>

                </form>
            </div>
        )
    
    }//end render
}// end class

export default connect(mapStateToProps)(TransgenderedCustom)