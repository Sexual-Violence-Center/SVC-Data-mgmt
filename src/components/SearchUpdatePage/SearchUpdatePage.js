import React, { Component } from 'react';
import AdminNav from '../Nav/AdminNav/AdminNav';

class SearchUpdatePage extends Component {
    render(){
        return(
            <div>
                <AdminNav />
                <div style={{float: "right"}}>
                <h1>Search and Update</h1>
                </div>
            </div>
        )
    }
}

export default SearchUpdatePage;