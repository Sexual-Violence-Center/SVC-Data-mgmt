const EntryFormReducer = (state = {}, action) => {
    switch(action.type){
        case 'ENTRY_FORM_DATA':
            return {...state, ...action.payload};
        case 'CLEAR_FORM':
            return {};
        default:
            return state;
    }
}

export default EntryFormReducer;