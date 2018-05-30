const makeUrlFunction = (array) =>{
    let urlString =    `?`;
    array.forEach(chip => {  
        urlString += `${chip.value}=true&`
    })
    urlString = urlString.slice(0, -1);

    return urlString


//TODO: make queries so user can select 'AND' or 'OR
//     if (querySelector === 'and') {
//         array.forEach(chip => {
//             urlString += `${chip.value}=true&and=true`
//         })
//         urlString = urlString.slice(0, -9);
//     }

//     else if (querySelector === 'or') {
//         array.forEach(chip => {
//             urlString += `${chip.value}=true&or=true`
//         })
//         urlString = urlString.slice(0, -8);
//     }

// else {
//     array.forEach(chip => {
//         urlString += `${chip.value}=true&`
//     })
//     urlString = urlString.slice(0, -1);
        
// };
}

export default makeUrlFunction;

