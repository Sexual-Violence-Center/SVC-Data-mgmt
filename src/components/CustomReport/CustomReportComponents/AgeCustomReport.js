import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import keycode from 'keycode';
import Downshift from 'downshift';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';

import AgeObject from '../ObjectLists/Age.Object';
import renderInput from '../StandardFunctionsForChips/renderInputFunction';
import renderSuggestion from '../StandardFunctionsForChips/renderSuggestion'
import styles from '../StandardFunctionsForChips/chipStyles'

const mapStateToProps = state => ({
  state
});

function getSuggestions(inputValue) {
  let count = 0;

    return AgeObject.filter(suggestion => {
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

class AgeCustom extends React.Component {
  state = {
    // inputValue: '',
    selectedItem: [],
  };

  handleKeyDown = event => {
    const { inputValue, selectedItem } = this.state;
    if (selectedItem.length && !inputValue.length && keycode(event) === 'backspace') {
      this.setState({
        selectedItem: selectedItem.slice(0, selectedItem.length - 1),
      });
    }
  };

  handleInputChange = event => {
    this.setState({ inputValue: event.target.value });
  };

  handleChange = item => {
    let { selectedItem } = this.state;
    if (selectedItem.indexOf(item) === -1) {
      selectedItem = [...selectedItem, item];
    }

    this.setState({
      // inputValue: '',
      selectedItem,
    })

    console.log('state', this.state);

    this.props.dispatch({
      type: 'CUSTOM_REPORT_INPUT',
      payload: {...this.state, selectedItem}
    })
   
  };

  handleDelete = item => () => {
    const selectedItem = [...this.state.selectedItem];
    selectedItem.splice(selectedItem.indexOf(item), 1);
    this.setState({ selectedItem });
  };

  render() {
    const { classes } = this.props;
    const { inputValue, selectedItem } = this.state;
    // console.log('selectedItem', selectedItem);
    
    return (
      <Downshift inputValue={inputValue} onChange={this.handleChange} selectedItem={selectedItem}>
      
        {({
          getInputProps,
          getItemProps,
          isOpen,
          inputValue: inputValue2,
          selectedItem: selectedItem2,
          highlightedIndex,
        }) => (
          <div className={classes.container}>Age
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
                    onDelete={this.handleDelete(item)}
                    value={item.value}
                  />
                )),
                onChange: this.handleInputChange,
                onKeyDown: this.handleKeyDown,
                placeholder: 'Age Types',
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

AgeCustom.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styledAgeCustom = withStyles(styles)(AgeCustom);
export default connect(mapStateToProps)(styledAgeCustom)


    