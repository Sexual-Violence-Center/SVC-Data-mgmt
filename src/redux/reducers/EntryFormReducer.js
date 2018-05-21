const EntryFormReducer = (state = {}, action) => {
    switch(action.type){
        case 'ENTRY_FORM_DATA':
        console.log('EntryFormReducer', this.state);
            return {...state, ...action.payload};
        default:
            return state;
    }
}

export default EntryFormReducer;