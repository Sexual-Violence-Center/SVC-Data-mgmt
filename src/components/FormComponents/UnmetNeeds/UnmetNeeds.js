import React, { Component } from 'react';

class UnmetNeeds extends Component {
    render() {
        return (
            <div className="unmetNeeds">
                <h2>Unmet Needs</h2>
                <div className="unmetNeedsContainer">
                    <label>Were there any unmet needs for this individual?</label>
                    <br />
                    <br />
                    <input type="checkbox" id="unmet_need_financial" name="unmet_need_financial" value="unmet_need_financial" /><label htmlFor="unmet_need_financial">Financial</label>
                    <br />
                    <input type="checkbox" id="unmet_need_shelter_housing" name="unmet_need_shelter_housing" value="unmet_need_shelter_housing" /><label htmlFor="unmet_need_shelter_housing">Shelter/Housing</label>
                    <br />
                    <input type="checkbox" id="unmet_need_other" name="unmet_need_other" value="unmet_need_other" /><label htmlFor="unmet_need_other">Other</label>
                    <br />
                    <label htmlFor="unmet_other_descr">
                        specify other:
                    <input type="text" id="unmet_other_descr" name="unmet_other_descr" />
                    </label>
                    <br />
                    <label htmlFor="unmet_need_staying_where">If shelter was unavailable, where did the v/s stay?</label>
                    <input type="text" id="unmet_need_staying_where" name="unmet_need_staying_where" />
                </div>
            </div>
        )
    }
}

export default UnmetNeeds;