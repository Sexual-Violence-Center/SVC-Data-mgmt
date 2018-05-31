import React, { Component } from 'react';
import { Button, Typography } from '@material-ui/core';

const style = {
    container: {
        padding: '20px',
        margin: '10px',
        float: 'right',
    },
    submitButton: {
        background: '#757575',
    }
}

class FormButton extends Component {
    render() {
        return (
            <div style={style.container}>
                <Button style={style.submitButton} onClick={this.props.handleSubmit}>
                    <Typography variant="headline" style={{ color: '#F5F5F5' }}>
                        {this.props.text}
                    </Typography>
                </Button>
            </div>
        )
    }
}

export default FormButton;