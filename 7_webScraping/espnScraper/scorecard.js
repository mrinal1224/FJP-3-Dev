const url =
  "https://www.espncricinfo.com//series/ipl-2020-21-1210595/mumbai-indians-vs-chennai-super-kings-1st-match-1216492/full-scorecard";

const request = require("request");
const cheerio = require("cheerio");

request(url, cb);

function cb(err, response, html) {
  if (err) {
    console.error(err);
  } else {
    extractMatchDetails(html);
  }
}

function extractMatchDetails(html) {
  let $ = cheerio.load(html);

  let descString = $('.match-header-info.match-info-MATCH .description');

  let descStringArr = descString.text().split(",");

  let venue = descStringArr[1].trim();
  let date = descStringArr[2].trim();

  let result = $(
    ".match-info.match-info-MATCH.match-info-MATCH-half-width .status-text span"
  ).text();

  console.log(venue);
  console.log(date);
  console.log(result);

  console.log('```````````````````````````````````````````````````')


  let innings = $('.card.content-block.match-scorecard-table>.Collapsible')


  let htmlString = ''


  for(let i=0 ; i<innings.length ; i++){
      htmlString += $(innings[i]).html()
  }

  console.log(htmlString)






}
