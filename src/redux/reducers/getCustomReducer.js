const initialState = {
    startDate: '',
    endDate: '',
    selectedItems: [],
    querySelector: ''
}

const CustomReportReducer = (state = initialState, action) => {
    console.log('action', action.payload);
    switch (action.type) {
        // case 'CUSTOM_REPORT_INPUT':
        //     return { ...state, ...action.payload };
        case 'ADD_SELECTED_ITEM':
            return { ...state, selectedItems: [...state.selectedItems, action.payload.selectedItem[0].value] };
        case 'UPDATE_START_DATE':
            return { ...state, startDate: action.payload };
        case 'UPDATE_END_DATE':
            return { ...state, endDate: action.payload };
        case 'UPDATE_QUERY_SELECTOR':
            return { ...state, querySelector: action.payload }
        default:
            return state;
    }
}

export default CustomReportReducer;
