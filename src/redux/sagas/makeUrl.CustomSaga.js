
const makeUrlFunction = (array) =>{
    let urlString =    `?`;
    array.forEach(chip => {  
        urlString += `${chip.value}=true&`
    })

    urlString = urlString.slice(0, -1);
    return urlString;
}

export default makeUrlFunction;