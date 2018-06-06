import React, { Component } from 'react';
import { connect } from 'react-redux';
import { USER_ACTIONS } from '../../../redux/actions/userActions';
// import Calendar from 'react-calendar'
// import Calendar from 'rc-calendar'
import AdminNav from '../../Nav/AdminNav/AdminNav';


const mapStateToProps = state => ({
    user: state.user,
    county: state.getCountyReducer,
    state
});

class CountyVictimization extends Component{ 
    constructor(){
        super();
        this.state={
            startDate:'',
            endDate:'',
            county:'',
            service_location: ''
        }
    }

    handleChangeFor = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        }); 
       
    }
    submit = () => {
        this.props.dispatch({
            type: 'GET_PERSON_DATA_COUNTY', 
            payload: this.state
        })
    }
    print = () => {
        console.log('print button clicked');
        window.print();
    }

    componentDidMount () {
        
        this.props.dispatch({type: USER_ACTIONS.FETCH_USER});
        console.log(this.props.state.getCountyReducer)
    }

    renderOther=()=>{
        console.log("in if render other ", this.props.state.violenceOtherReducer);
        if(this.props.state.violenceOtherReducer){
            //console.log('in if render other ', this.props.state.violenceOtherReducer)
        let list = this.props.state.violenceOtherReducer.map(
            item => {
            return <div> <br /><span>  {item.violence_other_specify}   </span></div>;
            }
        );
        return list;
        }
    }
    render () {
        return <section className="victimization">
            <h4>Types of Victimization</h4>
            <table className="countyTable">
              <thead>
                <tr>
                  <th>Victimization Types</th>
                  <th>Number</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Adult Sexual Assault</td>
                  <td>
                    {
                      this.props.state.getCountyReducer
                        .violence_adult_sexual
                    }
                  </td>
                </tr>
                <tr>
                  <td>
                    Adult Sexually Abused/Assaulted as Children Total
                  </td>
                  <td>
                    {
                      this.props.state.getCountyReducer
                        .violence_adult_when_child_total
                    }
                  </td>
                </tr>
                <tr>
                  <td>
                    Adult Sexually Abused/Assaulted as Children by
                    Family
                  </td>
                  <td>
                    {
                      this.props.state.getCountyReducer
                        .violence_adult_when_child_by_family
                    }
                  </td>
                </tr>
                <tr>
                  <td>
                    Adult Sexually Abused/Assaulted as Children by Other
                  </td>
                  <td>
                    {
                      this.props.state.getCountyReducer
                        .violence_adult_when_child_by_other
                    }
                  </td>
                </tr>
                <tr>
                  <td>Bullying</td>
                  <td>
                    {
                      this.props.state.getCountyReducer
                        .violence_bullying
                    }
                  </td>
                </tr>
                <tr>
                  <td>Child Pornography</td>
                  <td>
                    {
                      this.props.state.getCountyReducer
                        .violence_child_pornography
                    }
                  </td>
                </tr>
                <tr>
                  <td>Child Sexual Abuse/Assault Total</td>
                  <td>
                    {
                      this.props.state.getCountyReducer
                        .violence_minor_total
                    }
                  </td>
                </tr>
                <tr>
                  <td>Child Sexual Abuse/Assault by Family</td>
                  <td>
                    {
                      this.props.state.getCountyReducer
                        .violence_minor_by_family
                    }
                  </td>
                </tr>
                <tr>
                  <td>Child Sexual Abuse/Assault by Other</td>
                  <td>
                    {
                      this.props.state.getCountyReducer
                        .violence_minor_by_other
                    }
                  </td>
                </tr>
                <tr>
                  <td>Domestic And/Or Family Violence</td>
                  <td>
                    {
                      this.props.state.getCountyReducer
                        .violence_domestic
                    }
                  </td>
                </tr>
                <tr>
                  <td>Elder Abuse or Neglect</td>
                  <td>
                    {this.props.state.getCountyReducer.violence_elder}
                  </td>
                </tr>
                <tr>
                  <td>Human Trafficking: Sex</td>
                  <td>
                    {
                      this.props.state.getCountyReducer
                        .violence_exploitation_trafficking
                    }
                  </td>
                </tr>
                <tr>
                  <td>Stalking/Harassment Total</td>
                  <td>
                    {
                      this.props.state.getCountyReducer
                        .violence_stalking_harassment_total
                    }
                  </td>
                </tr>
                <tr>
                  <td>Stalking/Harassment - Exposing</td>
                  <td>
                    {
                      this.props.state.getCountyReducer
                        .violence_exposing
                    }
                  </td>
                </tr>
                <tr>
                  <td>Stalking/Harassment - Harassment</td>
                  <td>
                    {
                      this.props.state.getCountyReducer
                        .violence_harassment
                    }
                  </td>
                </tr>
                <tr>
                  <td>Stalking/Harassment - Internet</td>
                  <td>
                    {
                      this.props.state.getCountyReducer
                        .violence_internet
                    }
                  </td>
                </tr>
                <tr>
                  <td>Stalking/Harassment - Phone</td>
                  <td>
                    {this.props.state.getCountyReducer.violence_phone}
                  </td>
                </tr>
                <tr>
                  <td>Stalking/Harassment - Stalking</td>
                  <td>
                    {
                      this.props.state.getCountyReducer
                        .violence_stalking
                    }
                  </td>
                </tr>
                <tr>
                  <td>Teen Dating Victimization</td>
                  <td>
                    {
                      this.props.state.getCountyReducer
                        .violence_teen_dating
                    }
                  </td>
                </tr>
                <tr>
                  <td>Unknown/Pass/Doesn't Know</td>
                  <td>
                    {this.props.state.getCountyReducer.violence_unknown}
                  </td>
                </tr>
                <tr>
                  <td>Other</td>
                  <td>
                    {this.props.state.getCountyReducer.violence_other}
                  </td>
                </tr>
              </tbody>
            </table>
            <div>
              <span>Other Specified:  </span>
              {this.renderOther()}
            </div>
          </section>;
    }
}
export default connect(mapStateToProps)(CountyVictimization);