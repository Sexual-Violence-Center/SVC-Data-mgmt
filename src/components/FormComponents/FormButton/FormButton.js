import React, { Component } from 'react';
import { Button } from '@material-ui/core';

const style = {
    submitButton: {
        background: '#757575',
        color: '#F5F5F5'
    }
}

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