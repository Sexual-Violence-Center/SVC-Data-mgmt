const defaultState = {
    startDate: '',
    endDate: '',
    selectedItem: [],
    querySelector: ''
}

const CustomReportInputReducer = (state = defaultState, action) => {
    console.log('action', action.payload);
    
    switch (action.type) {
        case 'CUSTOM_REPORT_PAGE_LOADED':
            return defaultState;
        case 'UPDATE_SELECTED_ITEM':
            return { ...state, selectedItem: [...state.selectedItem, action.payload.selectedItem[action.payload.selectedItem.length - 1].value] };
        case 'DELETE_SELECTED_ITEM':
            return { ...state, selectedItem: [...state.selectedItem] };
        case 'UPDATE_START_DATE':
            return { ...state, startDate: action.payload.startDate };
        case 'UPDATE_END_DATE':
            return { ...state, endDate: action.payload.endDate };
        case 'UPDATE_QUERY_SELECTOR':
            return { ...state, querySelector: action.payload.querySelector }
        default:
            return state;
    }
}

export default CustomReportInputReducer;
