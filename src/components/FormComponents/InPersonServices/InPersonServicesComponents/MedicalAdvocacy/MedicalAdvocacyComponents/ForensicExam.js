import React, { Component } from 'react';

class ForensicExam extends Component {
    constructor() {
        super();
        this.state = {
            checked: false
        }
    }

    handleChecked = (event) => {
        this.setState({checked: !this.state.checked})
        this.props.handleChange(event)
    }

    handleRadio = (event) => {
        this.props.handleChange(event)
    }

    render() {
        let transportation;
        if (this.state.checked) {
            transportation = 
            <div>
                <label>
                    Was transportation provided?:
                </label>
                <form value={this.props.transportation_medical_exam_support} onChange={this.handleRadio}>
                    <input type="radio" name="transportation_medical_exam_support" value={true} /><label htmlFor="transportation_medical_exam_support">yes</label>
                    <input type="radio" name="transportation_medical_exam_support" value={false} /><label htmlFor="transportation_medical_exam_support">no</label>
                </form>
            </div>
        } else {
            transportation = <div></div>
        }
        return (
            <div>
                <input type="checkbox" name="medical_exam_support" value={this.props.medical_exam_support} onChange={this.handleChecked} />
                <label>
                    Forensic Exam Support
                </label>
                <br />
                {transportation}
            </div>
        )
    }
}

export default ForensicExam;