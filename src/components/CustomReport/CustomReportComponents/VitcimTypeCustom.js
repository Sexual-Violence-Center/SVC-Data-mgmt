import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    user: state.user,
    state,
});

class VictimTypeCustom extends Component {
    constructor() {
        super();
        this.state = {
            victim_type: '',
        }
    }

    handleChangeFor = (event) => {
        const target = event.target;
        const value = target.type === ('checkbox') ? target.checked : target.value;

        this.setState({
            victim_type: value
        });
    }

    render (){
        return (

            <div>
                <h4> Custom Types of Victim (Primary/Secondary) Report: </h4>
                < form value = { this.state.victim_type} 
                    onClick = { this.handleChangeFor}
                >
                        <input type="checkbox" 
                            id = "adultPrimaryVictim"
                            value = "adultPrimaryVictim"
                        />
                        < label htmlFor = "adultPrimaryVictim" >
                            Adult Primary Victim
                        </label>

                        <input type="checkbox" 
                            id = "adultSecondayVictim"
                            value = "adultSecondayVictim"
                        />
                        < label htmlFor = "adultSecondayVictim" >
                            Adult Seconday Victim
                        </label>

                        <input type="checkbox" 
                            id = "youthPrimaryVictim"
                            value = "youthPrimaryVictim"
                        />
                        < label htmlFor = "youthPrimaryVictim" >
                            Youth Primary Victim
                        </label>

                        <input type="checkbox" 
                            id = "youthSecondayVictim"
                            value = "youthSecondayVictim"
                        />
                        < label htmlFor = "youthSecondayVictim" >
                            Youth Seconday Victim
                        </label>

                </form>
            </div>
        )
    
    }//end render
}// end class

export default connect(mapStateToProps)(VictimTypeCustom)