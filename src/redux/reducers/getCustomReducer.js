const CustomReportInputReducer = (state = {}, action) => {
    console.log('action', action.payload);
    switch (action.type) {
        case 'CUSTOM_REPORT_INPUT':
            return { ...state, ...action.payload };
        default:
            return state;
    }
}

export default CustomReportInputReducer;
