import React, { Component } from 'react';
import { Card, Button, Typography } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

const style = {
    padding: '20px',
    margin: '10px',
    textAlign: 'center'
}

class SubmitButton extends Component {
    render() {
        return (
            <div>
                <Card style={style}>
                    <Button onClick={this.props.handleSubmit}>
                        <Typography variant="headline">
                            Submit
                        </Typography>
                    </Button>
                </Card>
            </div>
        )
    }
}

export default SubmitButton;