const intialState = {
  victim_prior_contact: "",
  victim_contact_prior_oct: "",
};

const EntryFormReducer = (state = intialState, action) => {
    switch(action.type){
        case 'ENTRY_FORM_DATA':
            return {...state, ...action.payload};
        case 'CLEAR_FORM':
            return null;
        default:
            return state;
    }
}

export default EntryFormReducer;