import React from 'react';
import PropTypes from 'prop-types';
import keycode from 'keycode';
import Downshift from 'downshift';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import Chip from '@material-ui/core/Chip';

import contactType from '../ObjectLists/ContactType.Object';
import renderInput from '../StandardFunctionsForChips/renderInputFunction';
import renderSuggestion from '../StandardFunctionsForChips/renderSuggestion'
// import renderSuggestionPropTypes from '../StandardFunctionsForChips/renderSuggestion'
import styles from '../StandardFunctionsForChips/chipStyles'


renderSuggestion.propTypes = {
    highlightedIndex: PropTypes.number,
    index: PropTypes.number,
    itemProps: PropTypes.object,
    selectedItem: PropTypes.string,
    suggestion: PropTypes.shape({
        label: PropTypes.string
    }).isRequired,
};

function getSuggestions(inputValue) {
  let count = 0;

  return contactType.filter(suggestion => {
    const keep =
      (!inputValue || suggestion.label.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1) &&
      count < 5;

    if (keep) {
      count += 1;
    }

    return keep;
  });
}

class ContactTypeCustom extends React.Component {
  state = {
    inputValue: '',
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
      inputValue: '',
      selectedItem,
    });
  };

  handleDelete = item => () => {
    const selectedItem = [...this.state.selectedItem];
    selectedItem.splice(selectedItem.indexOf(item), 1);

    this.setState({ selectedItem });
  };

  render() {
    const { classes } = this.props;
    const { inputValue, selectedItem } = this.state;
    console.log('inputValue', inputValue);
    console.log('selectedItem', selectedItem);
    

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
          <div className={classes.container}>
          {/* <h4> Custom Contact Type Report </h4> */}
            {renderInput({
              fullWidth: true,
              classes,
              InputProps: getInputProps({
                startAdornment: selectedItem.map(item => (
                  <Chip
                    key={item}
                    tabIndex={-1}
                    label={item}
                    className={classes.chip}
                    onDelete={this.handleDelete(item)}
                  />
                )),
                onChange: this.handleInputChange,
                onKeyDown: this.handleKeyDown,
                placeholder: 'Select Contact Types',
                id: 'integration-downshift-multiple',
              }),
            })}
            {isOpen ? (
              <Paper className={classes.paper} square>
                {getSuggestions(inputValue2).map((suggestion, index) =>
                  renderSuggestion({
                    suggestion,
                    index,
                    itemProps: getItemProps({ item: suggestion.label }),
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

ContactTypeCustom.propTypes = {
  classes: PropTypes.object.isRequired,
};

// const styles = theme => ({
//   root: {
//     flexGrow: 1,
//     height: 250,
//   },
//   container: {
//     flexGrow: 1,
//     position: 'relative',
//   },
//   paper: {
//     position: 'absolute',
//     zIndex: 1,
//     marginTop: theme.spacing.unit,
//     left: 0,
//     right: 0,
//   },
//   chip: {
//     margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`,
//   },
//   inputRoot: {
//     flexWrap: 'wrap',
//   },
// });

ContactTypeCustom.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContactTypeCustom);

    