import React, { Component } from 'react';
import { connect } from 'react-redux';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const mapStateToProps = state => ({
    user: state.user,
    county: state.getCountyReducer,
    state
});

class Zipcode extends Component{ 
    constructor(){
        super();
        this.state={
            starTableCellate:'',
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

    componenTableCellidMount () {
        
        this.props.dispatch({type: USER_ACTIONS.FETCH_USER});
        console.log(this.props.state.getCountyReducer)
    }
    render () {
        return (
            <section className="zipcode">
                <h4>Hennepin County Zip Code Totals</h4>
                <Table className="countyTable">
                <TableHead>
                    <TableRow>
                        <TableCell>Zip Code</TableCell>
                        <TableCell>Total</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    <TableRow>
                        <TableCell>55011</TableCell>
                        <TableCell>{this.props.state.getCountyReducer.victim_zipcode_55111}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>55305</TableCell>
                        <TableCell>{this.props.state.getCountyReducer.victim_zipcode_55305}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>55311</TableCell>
                        <TableCell>{this.props.state.getCountyReducer.victim_zipcode_55311}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>55316</TableCell>
                        <TableCell>{this.props.state.getCountyReducer.victim_zipcode_55316}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>55317</TableCell>
                        <TableCell>{this.props.state.getCountyReducer.victim_zipcode_55317}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>55327</TableCell>
                        <TableCell>{this.props.state.getCountyReducer.victim_zipcode_55327}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>55328</TableCell>
                        <TableCell>{this.props.state.getCountyReducer.victim_zipcode_55328}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>55331</TableCell>
                        <TableCell>{this.props.state.getCountyReducer.victim_zipcode_55331}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>55340</TableCell>
                        <TableCell>{this.props.state.getCountyReducer.victim_zipcode_55340}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>55341</TableCell>
                        <TableCell>{this.props.state.getCountyReducer.victim_zipcode_55341}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>55343</TableCell>
                        <TableCell>{this.props.state.getCountyReducer.victim_zipcode_55343}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>55344</TableCell>
                        <TableCell>{this.props.state.getCountyReducer.victim_zipcode_55344}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>55345</TableCell>
                        <TableCell>{this.props.state.getCountyReducer.victim_zipcode_55345}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>55346</TableCell>
                        <TableCell>{this.props.state.getCountyReducer.victim_zipcode_55346}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>55347</TableCell>
                        <TableCell>{this.props.state.getCountyReducer.victim_zipcode_55347}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>55356</TableCell>
                        <TableCell>{this.props.state.getCountyReducer.victim_zipcode_55356}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>55357</TableCell>
                        <TableCell>{this.props.state.getCountyReducer.victim_zipcode_55357}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>55359</TableCell>
                        <TableCell>{this.props.state.getCountyReducer.victim_zipcode_55359}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>55361</TableCell>
                        <TableCell>{this.props.state.getCountyReducer.victim_zipcode_55361}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>55364</TableCell>
                        <TableCell>{this.props.state.getCountyReducer.victim_zipcode_55364}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>55369</TableCell>
                        <TableCell>{this.props.state.getCountyReducer.victim_zipcode_55369}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>55373</TableCell>
                        <TableCell>{this.props.state.getCountyReducer.victim_zipcode_55373}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>55374</TableCell>
                        <TableCell>{this.props.state.getCountyReducer.victim_zipcode_55374}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>55375</TableCell>
                        <TableCell>{this.props.state.getCountyReducer.victim_zipcode_55375}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>55384</TableCell>
                        <TableCell>{this.props.state.getCountyReducer.victim_zipcode_55384}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>55387</TableCell>
                        <TableCell>{this.props.state.getCountyReducer.victim_zipcode_55387}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>55388</TableCell>
                        <TableCell>{this.props.state.getCountyReducer.victim_zipcode_55388}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>55391</TableCell>
                        <TableCell>{this.props.state.getCountyReducer.victim_zipcode_55391}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>55392</TableCell>
                        <TableCell>{this.props.state.getCountyReducer.victim_zipcode_55392}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>55401</TableCell>
                        <TableCell>{this.props.state.getCountyReducer.victim_zipcode_55401}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>55402</TableCell>
                        <TableCell>{this.props.state.getCountyReducer.victim_zipcode_55402}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>55403</TableCell>
                        <TableCell>{this.props.state.getCountyReducer.victim_zipcode_55403}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>55404</TableCell>
                        <TableCell>{this.props.state.getCountyReducer.victim_zipcode_55404}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>55405</TableCell>
                        <TableCell>{this.props.state.getCountyReducer.victim_zipcode_55405}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>55406</TableCell>
                        <TableCell>{this.props.state.getCountyReducer.victim_zipcode_55406}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>55407</TableCell>
                        <TableCell>{this.props.state.getCountyReducer.victim_zipcode_55407}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>55408</TableCell>
                        <TableCell>{this.props.state.getCountyReducer.victim_zipcode_55408}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>55409</TableCell>
                        <TableCell>{this.props.state.getCountyReducer.victim_zipcode_55409}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>55410</TableCell>
                        <TableCell>{this.props.state.getCountyReducer.victim_zipcode_55410}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>55411</TableCell>
                        <TableCell>{this.props.state.getCountyReducer.victim_zipcode_55411}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>55412</TableCell>
                        <TableCell>{this.props.state.getCountyReducer.victim_zipcode_55412}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>55413</TableCell>
                        <TableCell>{this.props.state.getCountyReducer.victim_zipcode_55413}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>55414</TableCell>
                        <TableCell>{this.props.state.getCountyReducer.victim_zipcode_55414}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>55415</TableCell>
                        <TableCell>{this.props.state.getCountyReducer.victim_zipcode_55415}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>55416</TableCell>
                        <TableCell>{this.props.state.getCountyReducer.victim_zipcode_55416}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>55417</TableCell>
                        <TableCell>{this.props.state.getCountyReducer.victim_zipcode_55417}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>55418</TableCell>
                        <TableCell>{this.props.state.getCountyReducer.victim_zipcode_55418}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>55419</TableCell>
                        <TableCell>{this.props.state.getCountyReducer.victim_zipcode_55419}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>55420</TableCell>
                        <TableCell>{this.props.state.getCountyReducer.victim_zipcode_55420}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>55422</TableCell>
                        <TableCell>{this.props.state.getCountyReducer.victim_zipcode_55422}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>55423</TableCell>
                        <TableCell>{this.props.state.getCountyReducer.victim_zipcode_55423}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>55424</TableCell>
                        <TableCell>{this.props.state.getCountyReducer.victim_zipcode_55424}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>55425</TableCell>
                        <TableCell>{this.props.state.getCountyReducer.victim_zipcode_55425}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>55426</TableCell>
                        <TableCell>{this.props.state.getCountyReducer.victim_zipcode_55426}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>55427</TableCell>
                        <TableCell>{this.props.state.getCountyReducer.victim_zipcode_55427}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>55428</TableCell>
                        <TableCell>{this.props.state.getCountyReducer.victim_zipcode_55428}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>55429</TableCell>
                        <TableCell>{this.props.state.getCountyReducer.victim_zipcode_55429}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>55430</TableCell>
                        <TableCell>{this.props.state.getCountyReducer.victim_zipcode_55430}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>55431</TableCell>
                        <TableCell>{this.props.state.getCountyReducer.victim_zipcode_55431}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>55435</TableCell>
                        <TableCell>{this.props.state.getCountyReducer.victim_zipcode_55435}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>55436</TableCell>
                        <TableCell>{this.props.state.getCountyReducer.victim_zipcode_55436}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>55437</TableCell>
                        <TableCell>{this.props.state.getCountyReducer.victim_zipcode_55437}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>55438</TableCell>
                        <TableCell>{this.props.state.getCountyReducer.victim_zipcode_55438}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>55439</TableCell>
                        <TableCell>{this.props.state.getCountyReducer.victim_zipcode_55439}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>55441</TableCell>
                        <TableCell>{this.props.state.getCountyReducer.victim_zipcode_55441}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>55442</TableCell>
                        <TableCell>{this.props.state.getCountyReducer.victim_zipcode_55442}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>55443</TableCell>
                        <TableCell>{this.props.state.getCountyReducer.victim_zipcode_55443}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>55444</TableCell>
                        <TableCell>{this.props.state.getCountyReducer.victim_zipcode_55444}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>55445</TableCell>
                        <TableCell>{this.props.state.getCountyReducer.victim_zipcode_55445}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>55446</TableCell>
                        <TableCell>{this.props.state.getCountyReducer.victim_zipcode_55446}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>55447</TableCell>
                        <TableCell>{this.props.state.getCountyReducer.victim_zipcode_55447}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>55450</TableCell>
                        <TableCell>{this.props.state.getCountyReducer.victim_zipcode_55450}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>55454</TableCell>
                        <TableCell>{this.props.state.getCountyReducer.victim_zipcode_55454}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>55455</TableCell>
                        <TableCell>{this.props.state.getCountyReducer.victim_zipcode_55455}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Other</TableCell>
                        <TableCell>{this.props.state.getCountyReducer.victim_zipcode_other}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Unknown</TableCell>
                        <TableCell>{this.props.state.getCountyReducer.victim_zipcode_unkown}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Total:</TableCell>
                        <TableCell>{this.props.state.getCountyReducer.victim_zipcode_total}</TableCell>
                    </TableRow>
                    </TableBody>
                </Table>
            </section>
        )
    }
}
export default connect(mapStateToProps)(Zipcode);