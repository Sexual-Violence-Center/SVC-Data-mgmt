const makeQuery = toInsert => {
  //gets keys off of the object puts into an array
  const keys = Object.keys(toInsert);
  //getys all values and puts into array
  const values = Object.values(toInsert);

  //beginning of the query
  let queryText = `INSERT INTO "victim" (`;
  //takes each key which should correspond to a table column and puts into query
  keys.forEach(key => {
    queryText += `"${key}", `;
  });

  //takes of last comma
  queryText = queryText.slice(0, -2);
  //add closing parenthasis and adds values
  queryText += ") VALUES (";

  // for each value, makes a $value in query to sanatize the text
  for (let i = 1; i <= values.length; i++) {
    queryText += `$${i}, `;
  }
  // removes last comma
  queryText = queryText.slice(0, -2);
  //end of query
  queryText += `) RETURNING *;`;
  // returns the queryText and values as part of an object
  //pool.query(queryText.queryText, queryText.values)
  console.log('queryText ', queryText);
  console.log('values ', values);
  return { queryText: queryText, values: values };
};

module.exports = makeQuery;