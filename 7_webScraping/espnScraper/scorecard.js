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

    //console.log(teamName , opponentName);

    let cInning = $(innings[i]);


    let allRows = cInning.find('.table.batsman tbody tr')


     for(let j=0 ; j<allRows.length ; j++){
        let allCols = $(allRows[j]).find('td')
        let isWorthy = $(allCols[0]).hasClass('batsman-cell')

        if(isWorthy==true){
              let playerName = $(allCols[0]).text().trim()

              let runs = $(allCols[2]).text().trim()
              let balls = $(allCols[3]).text().trim()
              let fours = $(allCols[5]).text().trim()
              let sixes = $(allCols[6]).text().trim()
              let STR = $(allCols[7]).text().trim()

              console.log(`${playerName} | ${runs} |${balls} | ${fours} | ${sixes} | ${STR}`)
        }


     }

     console.log("````````````````````````````````````````````````````````")








    
  }

  //console.log(htmlString)
}
