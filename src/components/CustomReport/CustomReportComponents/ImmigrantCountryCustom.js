import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    user: state.user,
    state,
});

class ImmigrantCountryCustom extends Component {
    constructor() {
        super();
        this.state = {
            victim_immigrant: '',
        }
    }

    handleChangeFor = (event) => {
        const target = event.target;
        const value = target.type === ('checkbox') ? target.checked : target.value;

        this.setState({
            victim_immigrant: value
        });
    }

    render() {
        return (

        <div>
            <h4> Custom Immigrant Country Report: </h4>
            <form value={this.state.victim_immigrant} onClick={this.handleChangeFor} >
            <input type="checkbox" 
                    id = "immigrant_africa"
                    value = "immigrant_africa"
                />
                < label htmlFor = "immigrant_africa" >
                    Africa
                </label>

                <input type="checkbox" 
                    id = "immigrant_asia"
                    value = "immigrant_asia"
                />
                < label htmlFor = "immigrant_asia" >
                    Asian
                </label>

                <input type="checkbox" 
                    id = "immigrant_europe"
                    value = "immigrant_europe"
                />
                < label htmlFor = "immigrant_europe" >
                    Europe
                </label>

                <input type="checkbox" 
                    id = "immigrant_mex_cen_so_america"
                    value = "immigrant_mex_cen_so_america"
                />
                < label htmlFor = "immigrant_mex_cen_so_america" >
                    Mex/Cen/So America
                </label>

                <input type="checkbox" 
                id = "immigrant_middle_east"
                value = "immigrant_middle_east"
                />
                < label htmlFor = "immigrant_middle_east" >
                    Middle East
                </label>

                <input type="checkbox" 
                    id = "immigrant_no"
                    value = "immigrant_no"
                />
                < label htmlFor = "immigrant_no" >
                    No
                </label>

                <input type="checkbox" 
                    id = "immigrant_unknown"
                    value = "immigrant_unknown"
                />
                < label htmlFor = "immigrant_unknown" >
                    Unknown
                </label>

                <input type="checkbox" 
                    id = "immigrant_other"
                    value = "immigrant_other"
                />
                < label htmlFor = "immigrant_other" >
                    Other
                </label>
            </form>
        </div>
        )


    } //end render
} //end class

export default connect(mapStateToProps)(ImmigrantCountryCustom)