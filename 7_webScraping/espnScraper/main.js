const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595";

const request = require("request");
const cheerio = require("cheerio");

const allMatchObj = require("./allMatch");

request(url, cb);

function cb(err, response, html) {
  if (err) {
    console.error(err);
  } else {
    extractLink(html);
  }
}

function extractLink(html) {
  let $ = cheerio.load(html);
  let anchorElem = $('a[data-hover="View All Results"]');

  let link = anchorElem.attr("href");

  console.log(link);

  let fullLink = "https://www.espncricinfo.com" + link;
  console.log(fullLink);

  allMatchObj.getAllMatch(fullLink);
}
