import React, { Component } from 'react';
import { Card, Button, Typography } from '@material-ui/core';

class SubmitButton extends Component {
    render() {
        return (
            <div>
                <Card style={{ padding: '20px', margin: '10px', textAlign: 'center' }}>
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