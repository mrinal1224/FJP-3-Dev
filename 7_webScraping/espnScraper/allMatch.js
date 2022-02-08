const cheerio = require("cheerio");
const request = require("request");


const scorecardObj = require('./scorecard')

function getAllMatchLink(uri) {
  request(uri, function (error, response, html) {
    if (error) {
      console.log(error);
    } else {
      extractAllLink(html);
    }
  });
}

function extractAllLink(html) {
  let $ = cheerio.load(html);

  let scoreCardArr = $('a[data-hover="Scorecard"]');

  for (let i = 0; i < scoreCardArr.length; i++) {
    let link = $(scoreCardArr[i]).attr("href");
    let fullLink = "https://www.espncricinfo.com/" + link;
    //console.log(fullLink);

    scorecardObj.ps(fullLink)



  
  }
}

module.exports = {
  getAllMatch: getAllMatchLink,
};
