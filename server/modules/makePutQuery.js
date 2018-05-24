const makePutQuery = toUpdate=>{
    let queryText = `UPDATE "victim" SET `;
    let whereId = ` WHERE id `;

    const keys = Object.keys(toUpdate);
    const values = Object.values(toUpdate);

    keys.forEach((key, index)=>{
        if(key == 'id'){
            whereId += `= $${index+1}`
        } else {
            queryText += `"${key}" = $${index+1}, `
        }
    })
    //takes of last comma
    queryText = queryText.slice(0, -2);
    queryText += whereId;
    queryText +=`;`;

    return {query: queryText, values: values}

}

const test = {
    victim_ethnicity: 'white',
    id: 9,
    victim_age: 57   
}

console.log(makePutQuery(test));

module.exports = makePutQuery;