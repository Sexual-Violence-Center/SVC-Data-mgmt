let defaultState = {
    isOpen: false
}

const updateFormAlertReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "UPDATE_SUCCESSFUL":
            console.log(action.payload)
            return action.payload;
        case "CLOSE_UPDATE_SNACKBAR":
            return action.payload;
        default:
            return defaultState;
    }
};

export default updateFormAlertReducer;