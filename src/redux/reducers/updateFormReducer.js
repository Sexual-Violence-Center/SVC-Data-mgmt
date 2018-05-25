const updateFormReducer = (state = {}, action) => {
  switch (action.type) {
    case "FORM_TO_UPDATE":
      return action.payload;
    case "UPDATE_THE_FORM":
        return {...state, ...action.payload};
    default:
      return state;
  }
};

export default updateFormReducer;
