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

class FormButton extends Component {
    render() {
        return (
            <div>
                <Card style={style}>
                    <Button onClick={this.props.handleSubmit}>
                        <Typography variant="headline">
                            {this.props.text}
                        </Typography>
                    </Button>
                </Card>
            </div>
        )
    }
}

export default FormButton;