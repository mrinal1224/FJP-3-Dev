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

  let descString = $(".match-header-info.match-info-MATCH .description");

  let descStringArr = descString.text().split(",");

  let venue = descStringArr[1].trim();
  let date = descStringArr[2].trim();

  let result = $(
    ".match-info.match-info-MATCH.match-info-MATCH-half-width .status-text span"
  ).text();

  console.log(venue);
  console.log(date);
  console.log(result);

  console.log("```````````````````````````````````````````````````");

  let innings = $(".card.content-block.match-scorecard-table>.Collapsible");

  //console.log(innings)

  let htmlString = "";

  for (let i = 0; i < innings.length; i++) {
    htmlString += $(innings[i]).html();

    let teamName = $(innings[i]).find("h5").text();
    teamName = teamName.split("INNINGS")[0].trim();
    let opponentIndex = i == 0 ? 1 : 0;

    let opponentName = $(innings[opponentIndex]).find('h5').text()
    opponentName = opponentName.split('INNINGS')[0].trim()

    console.log(teamName , opponentName);
    
  }

  //console.log(htmlString)
}
