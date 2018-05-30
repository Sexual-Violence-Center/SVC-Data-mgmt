import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import keycode from 'keycode';
import Downshift from 'downshift';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';

import CrisisCounselingObject from '../ObjectLists/I-PCrisisCounselingCustom.Object';
import renderInput from '../StandardFunctionsForChips/renderInputFunction';
import renderSuggestion from '../StandardFunctionsForChips/renderSuggestion'
import styles from '../StandardFunctionsForChips/chipStyles'

const mapStateToProps = state => ({
  state
});

function getSuggestions(inputValue) {
  let count = 0;
  return CrisisCounselingObject.filter(suggestion => {
    const keep =
      (!inputValue || suggestion.label.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1) &&
      count < 5;
    if (keep) {
      count += 1;
    }
    return keep;
  });
}

renderSuggestion.propTypes = {
    highlightedIndex: PropTypes.number,
    index: PropTypes.number,
    itemProps: PropTypes.object,
    selectedItem: PropTypes.string,
    suggestion: PropTypes.shape({
        label: PropTypes.string
    }).isRequired,
};

class CrisisCounselingCustom extends React.Component {
  state = {
    inputValue: '',
    selectedItem: [],
  };

  handleChangeForComponent = (item) => {
    let { selectedItem } = this.state;
    if (this.props.selectedItem.indexOf(item) === -1) {
      selectedItem = [...selectedItem, item];
    }
    this.setState({
      inputValue: '',
      selectedItem,
    })
    this.props.dispatch({
      type: 'UPDATE_SELECTED_ITEM',
      payload: { ...this.state, selectedItem }
    })
  };

  handleInputChange = event => {
    this.setState({ inputValue: event.target.value });
  };

  handleKeyDown = event => {
    const { inputValue, selectedItem } = this.state;
    if (this.props.selectedItem.length && !this.props.inputValue.length && keycode(event) === 'backspace') {
      this.setState({
        selectedItem: selectedItem.slice(0, selectedItem.length - 1),
      });
    }
  };

  render() {
    const { classes } = this.props;
    const { inputValue, selectedItem } = this.state;
    
    return (
      <Downshift inputValue={inputValue} 
      onChange={this.handleChangeForComponent} 
      selectedItem={this.selectedItem}>
      
        {({
          getInputProps,
          getItemProps,
          isOpen,
          inputValue: inputValue2,
          selectedItem: selectedItem2,
          highlightedIndex,
        }) => (
          <div className={classes.container}>
          {/* <h4> Custom Contact Type Report </h4> */}
            {renderInput({
              fullWidth: true,
              classes,
              InputProps: getInputProps({
                startAdornment: selectedItem.map(item => (
                  <Chip
                    key={item.value}
                    tabIndex={-1}
                    label={item.label}
                    className={classes.chip}
                    onDelete={this.props.handleDelete(item)}
                    value={item.value}
                  />
                )),
                onChange: this.handleInputChange,
                onKeyDown: this.handleKeyDown,
                placeholder: 'Crisis Counseling Types',
                id: 'integration-downshift-multiple',
              }),
            })}
            {isOpen ? (
              <Paper className={classes.paper} square>
                {getSuggestions(inputValue2).map((suggestion, index) =>
                  renderSuggestion({
                    suggestion,
                    index,
                    itemProps: getItemProps({ item: suggestion }),
                    highlightedIndex,
                    selectedItem: selectedItem2,
                  }),
                )}
              </Paper>
            ) : null}
          </div>
        )}
      </Downshift>
    );
  }
}

CrisisCounselingCustom.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styledCrisisCounselingCustom = withStyles(styles)(CrisisCounselingCustom);
export default connect(mapStateToProps)(styledCrisisCounselingCustom)