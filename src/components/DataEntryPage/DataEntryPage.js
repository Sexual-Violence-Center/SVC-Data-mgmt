import React, { Component } from 'react';
import AdminDataEntryNav from '../Nav/DataEntryNav/AdminDataEntryNav';
// import UserDataEntryNav from '../Nav/DataEntryNav/UserDataEntryNav';


class DataEntryPage extends Component {
    render(){
        return(
            <div>
                <AdminDataEntryNav />
                <h1>Data Entry Page</h1>
            </div>
        )
    }
}

export default DataEntryPage;