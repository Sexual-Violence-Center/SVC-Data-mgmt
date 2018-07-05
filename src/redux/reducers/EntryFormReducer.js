// const intialState = {
// //   victim_prior_contact: "",
// //   victim_contact_prior_oct: "",
// };

const intialState = ""



const EntryFormReducer = (state = "", action) => {
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