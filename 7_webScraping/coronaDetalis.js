const request = require("request");
const cheerio = require("cheerio");

console.log("Before");

request("https://www.worldometers.info/coronavirus/", cb);

function cb(error, response, html) {
  if (error) {
    console.error(error);
  } else {
    handleHtml(html);
  }
}



function handleHtml(html){
  
  let selTool = cheerio.load(html)

  let contentArr = selTool('.maincounter-number span')

//   for(let i=0 ; i<contentArr.length ;i++){
//          let data = selTool(contentArr[i]).text()
//          console.log(data)
//   }


 let totalcases = selTool(contentArr[0]).text()
 console.log('Total Cases:' + totalcases)

 let totalDeaths = selTool(contentArr[1]).text(); // cases
 let totalRecoveries = selTool(contentArr[2]).text();

 console.log("Totals Deaths", totalDeaths);
 console.log("Total Recoverd", totalRecoveries);




}

console.log("after");
