const request = require('request')

const cheerio = require('cheerio')

let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/ball-by-ball-commentary"


request(url , cb)

function cb(error, response , html){
       if(error){
              console.log(err)
       }
       else{
              handleHtml(html)
       }
}

function handleHtml(html){
       let selTool = cheerio.load(html)

       let elemArr = selTool('.match-comment-wrapper .match-comment-long-text')

       let lbc = selTool(elemArr[0]).text()


       console.log(lbc)
}