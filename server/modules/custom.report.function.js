const customReportObject = require("../modules/custom.report.object");


//i'm going to assume params is an object with keys that correspond to 
//keys in the customReportObject 
function makeCustomQuery  (params, customReportObject) {
    const countWhere = `(SELECT COUNT(*) FROM "victim" WHERE `;
    const contactDate = `AND "contact_date"  BETWEEN $1 AND $2)`;
    //sets default start date and end date for queries
    let defaultStartDate = "1900-01-01";
    let defaultEndDate = "2100-01-01";
    const values =[defaultStartDate, defaultEndDate];
    //Beginning of queryText
    let queryText = `SELECT `;
    let alias = 'custom_query';

    //iterates over the params object and for each key 
    //checks if the key matches a key in the customReportObject
    Object.keys(params).forEach((keyParams, index, array)=>{
        if (keyParams == "and") {
          queryText += " AND ";
          alias = 'custom_query';
          return;
        } else if (keyParams == "or") {
          queryText += " OR ";
          alias = "custom_query";
          return;
        }

        Object.keys(customReportObject).forEach((keyCustomReport)=>{

            if(keyParams == keyCustomReport && array[index-1] !== 'and' ){
                //If matches adds the countWhere string and the query text at the key
                queryText += countWhere;
                queryText += customReportObject[keyCustomReport];
                alias= keyParams;
                        //adds the key as an alias to give a common column name to the return
                if(array[index + 1] !== 'and' && array[index + 1]){
                    alias = keyParams;
                    queryText += `${contactDate} as ${alias}, `;
                }
            }
            else if(keyParams == keyCustomReport){
            
                queryText += customReportObject[keyCustomReport];               
            }
        })// end customReport Loop

        //checks if the want custom start and end date
        if(keyParams== 'startDate'){
            values[0]= params[keyParams];
        } else if (keyParams == 'endDate'){
            values[1]= params[keyParams];
        } 

        
        //adds the contact date query and alias at the end of it
        // TODO: Stephen - this causes errors with the SQL query
        if(!array[index+1]){
            queryText += `${contactDate} as ${alias}, `;
        }
    })//end params loop

    //on the last on removes the space and comma
    //adds a colon
    queryText = queryText.slice(0, -2);
    queryText +=`;`
  
    return {queryText: queryText, values: values}
}

// const test = {
//   victim_gender_male: true,
// //   and: true,
// //    WhiteNonLatinoCaucasian: true,
// };

// console.log(makeCustomQuery(test, customReportObject))

module.exports = makeCustomQuery;