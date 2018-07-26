const intialState = "";

const EntryFormReducer = (state = intialState, action) => {
    switch(action.type){
        case 'ENTRY_FORM_DATA':
            return {...state, ...action.payload};
        case 'CLEAR_FORM':
            return intialState;
        default:
            return state;
    }
}

export default EntryFormReducer;