const newVictimEntry = (state = [], action) => {
    switch (action.type) {
        case 'DISPLAY_VICTIM_ID_NUMBER':
        console.log('newVictimEntry', action.payload)
            return action.payload;
        default:
            return state;
    }
}

export default newVictimEntry;