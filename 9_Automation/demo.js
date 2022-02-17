let puppeteer = require('puppeteer')

console.log('Before')

let browserWillbeLauncedPromise = puppeteer.launch({
       headless:false
})

browserWillbeLauncedPromise.then(function(browserInstance){
       return browserInstance;
})


console.log('After')