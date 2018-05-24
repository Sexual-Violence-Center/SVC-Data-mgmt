import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    user: state.user,
    state,
});

class IndividualsServiced extends Component {
    constructor() {
        super();
        this.state = {
            individuals_serviced: '',
        }
    }

    handleChangeFor = (event) => {
        const target = event.target;
        const value = target.type === ('checkbox') ? target.checked : target.value;

        this.setState({
            individuals_serviced: value
        });
    }

    render (){
        return (

            <div>
                <h4> Custom Individuals Serviced Report: </h4>
                <form value={this.state.individuals_serviced} onClick={this.handleChangeFor} >
                        <input type="checkbox" 
                            id = "total_victims"
                            value = "total_victims"
                        />
                        < label htmlFor = "total_victims" >
                            Total Individuals
                        </label>

                        <input type="checkbox" 
                            id = "new_victim"
                            value = "new_victim"
                        />
                        < label htmlFor = "new_victim" >
                            New Individuals
                        </label>
                </form>
            </div>
        )
    
    }//end render
}// end class

export default connect(mapStateToProps)(IndividualsServiced)