

const makeUrlFunction = (array) =>{
    let urlString =    `?`;
    array.forEach(item=>{
        urlString += `${item}=true&`
    })


    urlString = urlString.slice(0, -1);

    return urlString;
}

export default makeUrlFunction;