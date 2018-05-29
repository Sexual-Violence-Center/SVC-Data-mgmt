const makeUrlAndFunction = (array) => {
    let urlString = `?`;
    array.forEach(chip => {
        urlString += `${chip.value}=true&`
    })

    urlString = urlString.slice(0, -4);
    return urlString;
};

export default makeUrlAndFunction 