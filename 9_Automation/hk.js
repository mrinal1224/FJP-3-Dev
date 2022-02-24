const loginLink = "https://www.hackerrank.com/auth/login";

let email = "fesagom584@chatich.com";
let password = "pepcoding123";

let puppeteer = require("puppeteer");

console.log("Before");

let page;

// Puppeteer works on promises

let browserWillbeLauncedPromise = puppeteer.launch({
  headless: false,
  defaultViewport: null,
  args: ["--start-maximized"],
});
// we used puppeteer launch method to return an instance of broswer  

browserWillbeLauncedPromise
  .then(function (browserInstance) {
    let newTabPromise = browserInstance.newPage();
    return newTabPromise;
  })
  .then(function (newTab) {
    console.log("New Tab opened");
    page = newTab;
    let pageWillbeOpenedPromise = newTab.goto(loginLink);
    return pageWillbeOpenedPromise;
  })
  .then(function () {
    let typedEmailPromise = page.type("input[id='input-1']", email, {
      delay: 100,
    });
    return typedEmailPromise;
  })
  .then(function () {
    let typePasswordPromise = page.type("input[id='input-2']", password, {
      delay: 100,
    });
    return typePasswordPromise;
  })
  .then(function () {
    let loginPromise = page.click('button[data-analytics="LoginPassword"]', {
      delay: 100,
    });
    return loginPromise;
  }).then(function(){
    let algoWillBeclickedPromise = waitAndClick('.topic-card a[data-attr1="algorithms"]' , page)
    return algoWillBeclickedPromise;
  }).then(function(){
    console.log('Algo Section Clicked')
  });



function waitAndClick(selector , cPage){
    return new Promise(function(resolve  , reject){
      let waitForModalPromise = cPage.waitForSelector(selector);
      waitForModalPromise.then(function(){
        let clickModalPromise = cPage.click(selector , {delay : 100})
        return clickModalPromise
      }).then(function(){
        resolve()
      }).catch(function(){
        reject()
      })
    })
}
