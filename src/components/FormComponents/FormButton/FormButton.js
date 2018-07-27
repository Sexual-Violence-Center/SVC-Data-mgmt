import React, { Component } from 'react';
import { Button } from '@material-ui/core';

const style = {
    submitButton: {
        background: '#757575',
        color: '#F5F5F5'
    }
}

// this button component is used by the SubmitDialog Component as a Submit Button for the YellowForm and PinkForm
// components to submit a new form into the database.

// It's also used by the UpdateForm component as a Save Button to save any changes that have been made to a form in the database
// via a PUT request.
class FormButton extends Component {
    render() {
        return (
            <div>
                <Button variant="raised" style={style.submitButton} onClick={this.props.handleSubmit}>
                        {this.props.text}
                </Button>
            </div>
        )
    }
}

export default FormButton;