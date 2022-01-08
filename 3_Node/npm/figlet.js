const figlet = require('figlet')



figlet('Hello World!!', function(err, data) {
       if (err) {
           console.log('Something went wrong...');
           console.log(err);
           return;
       }
       console.log(data)
   });