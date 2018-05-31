import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Card, TextField, Grid } from '@material-ui/core';

const mapStateToProps = state => ({
    state
});

const styles = theme => ({
    card: {
        padding: '20px',
        margin: '10px'
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
})

class Referrals extends Component {
    constructor() {
        super()
        this.state = {
            referral_svc: '',
            referral_agency: '',
            referral_other: ''
        }
    }

    handleChangeFor = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
        this.props.dispatch({
            type: this.props.dispatchTo,
            payload: { ...this.state, [name]: value }
        })
    }

    render() {
        const { classes } = this.props;
        return (
            <div className="referrals">
                <Card className={classes.card}>
                    <h2>Referrals</h2>
                    <p>(please fill in name of organization)</p>
                    <Grid container direction="row" justify="flex-start" alignItems="center">
                        <Grid item xs={12} sm={12}>
                            <TextField
                                name="referral_svc"
                                label="SVC Services"
                                className={classes.textField}
                                type="text"
                                margin="normal"
                                value={this.state.referral_svc}
                                onChange={this.handleChangeFor}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                name="referral_agency"
                                label="Other advocacy agency"
                                className={classes.textField}
                                type="text"
                                margin="normal"
                                value={this.state.referral_agency}
                                onChange={this.handleChangeFor}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                name="referral_other"
                                label="Other services, support and resources(specify)"
                                style={{ width: '50%' }}
                                type="text"
                                margin="normal"
                                value={this.state.referral_other}
                                onChange={this.handleChangeFor}
                            />
                        </Grid>
                    </Grid>
                </Card>
            </div>
        )
    }
}

Referrals.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(Referrals));