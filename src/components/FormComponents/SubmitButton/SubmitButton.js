import React, { Component } from 'react';
import { Card, Button, Typography } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

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

class SubmitButton extends Component {
    render() {
        return (
            <div style={style.container}>
                <Button variant="raised" style={style.submitButton} onClick={this.props.handleSubmit}>
                    <Typography variant="headline" style={{color: '#F5F5F5'}}>
                        Submit
                    </Typography>
                </Button>
            </div>
        )
    }
}

export default SubmitButton;