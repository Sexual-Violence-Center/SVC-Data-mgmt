import React from 'react';
import PropTypes from 'prop-types';
import keycode from 'keycode';
import Downshift from 'downshift';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import Chip from '@material-ui/core/Chip';

import zipCodeObject from './ZipCode.object'

const zipCodes = [
  { label: '55111' },
  { label: '55305' },
  { label: '55311' },
  { label: '55316' },
  { label: '55317' },
  { label: '55327' },
  { label: '55328' },
  { label: '55331' },
  { label: '55340' },
  { label: '55341' },
  { label: '55342' },
  { label: '55343' },
  { label: '55344' },
  { label: '55345' },
  { label: '55346' },
  { label: '55347' },
  { label: '55357' },
  { label: '55359' },
  { label: '55361' },
  { label: '55364' },
  { label: '55360' },
  { label: '55361' },
  { label: '55364' },
  { label: '55369' },
  { label: '55373' },
  { label: '55374' },
  { label: '55375' },
  { label: '55384' },
  { label: '55387' },
  { label: '55388' },
  { label: '55391' },
  { label: '55392' },
  { label: '55401' },
  { label: '55402' },
  { label: '55403' },
  { label: '55404' },
  { label: '55405' },
  { label: '55406' },
  { label: '55407' },
  { label: '55408' },
  { label: '55409' },
  { label: '55410' },
  { label: '55411' },
  { label: '55412' },
  { label: '55413' },
  { label: '55414' },
  { label: '55415' },
  { label: '55416' },
  { label: '55417' },
  { label: '55418' },
  { label: '55419' },
  { label: '55420' },
  { label: '55422' },
  { label: '55423' },
  { label: '55424' },
  { label: '55425' },
  { label: '55426' },
  { label: '55427' },
  { label: '55428' },
  { label: '55429' },
  { label: '55430' },
  { label: '55431' },
  { label: '55435' },
  { label: '55436' },
  { label: '55437' },
  { label: '55438' },
  { label: '55439' },
  { label: '55441' },
  { label: '55442' },
  { label: '55443' },
  { label: '55444' },
  { label: '55445' },
  { label: '55446' },
  { label: '55447' },
  { label: '55450' },
  { label: '55454' },
  { label: '55455' },
  { label: 'other' },
  { label: 'unknown' }
];

function renderInput(inputProps) {
  const { InputProps, classes, ref, ...other } = inputProps;

  return (
    <TextField
      InputProps={{
        inputRef: ref,
        classes: {
          root: classes.inputRoot,
        },
        ...InputProps,
      }}
      {...other}
    />
  );
}

function renderSuggestion({ suggestion, index, itemProps, highlightedIndex, selectedItem }) {
  const isHighlighted = highlightedIndex === index;
  const isSelected = (selectedItem || '').indexOf(suggestion.label) > -1;

  return (
    <MenuItem
      {...itemProps}
      key={suggestion.label}
      selected={isHighlighted}
      component="div"
      style={{
        fontWeight: isSelected ? 500 : 400,
      }}
    >
      {suggestion.label}
    </MenuItem>
  );
}
renderSuggestion.propTypes = {
  highlightedIndex: PropTypes.number,
  index: PropTypes.number,
  itemProps: PropTypes.object,
  selectedItem: PropTypes.string,
  suggestion: PropTypes.shape({ label: PropTypes.string }).isRequired,
};

function getSuggestions(inputValue) {
  let count = 0;

  return zipCodes.filter(suggestion => {
    const keep =
      (!inputValue || suggestion.label.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1) &&
      count < 5;

    if (keep) {
      count += 1;
    }

    return keep;
  });
}

class ZipCodeCustom extends React.Component {
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
          <h4> Custom Zip Code Report </h4>
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
                placeholder: 'Select multiple zip codes',
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

ZipCodeCustom.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 250,
  },
  container: {
    flexGrow: 1,
    position: 'relative',
  },
  paper: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0,
  },
  chip: {
    margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`,
  },
  inputRoot: {
    flexWrap: 'wrap',
  },
});

ZipCodeCustom.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ZipCodeCustom);
