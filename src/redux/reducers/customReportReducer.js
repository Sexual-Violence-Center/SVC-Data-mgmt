const defaultState = {};

const CustomReportReducer = (state = defaultState, action) => {
  // console.log("action", action.payload);
  switch (action.type) {
    case "CUSTOM_REPORT":
      return action.payload;
    case "CUSTOM_REPORT_PAGE_LOADED":
      return defaultState;
    default:
      return state;
  }
};

export default CustomReportReducer;