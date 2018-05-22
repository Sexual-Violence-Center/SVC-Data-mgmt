const EntryFormReducer = (state = {}, action) => {
    switch(action.type){
        case 'ENTRY_FORM_DATA':
            return {...state, ...action.payload};
        default:
            return state;
    }
}

export default EntryFormReducer;