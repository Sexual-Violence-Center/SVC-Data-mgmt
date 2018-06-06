const violenceOtherReducer = (state = null, action) => {
  switch (action.type) {
    case "VIOLENCE_OTHER_SPECIFIED":
      return action.payload;
    default:
      return state;
  }
};

export default violenceOtherReducer;
