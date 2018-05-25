import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';

function renderSuggestion({ suggestion, index, itemProps, highlightedIndex, selectedItem }) {
    const isHighlighted = highlightedIndex === index;
    const isSelected = (selectedItem || '').indexOf(suggestion.label) > -1;

    return (
        <MenuItem
        {...itemProps}
        key={suggestion.value}
        selected={isHighlighted}
        component="div"
        style={{
            fontWeight: isSelected ? 500 : 400,
        }}
        >
        {suggestion.label}
        </MenuItem>
    );
    };


export default renderSuggestion;