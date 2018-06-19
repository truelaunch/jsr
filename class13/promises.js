// Vanilla JS syntax for a promise:

var p = new Promise(function(resolve, reject) {
    // Do an async task async task and then...
    if(true) {
        resolve('Success!');
    } else {
        reject('Failure!');
    }
});

p.then(function() {
  console.log("WORKING!!!");
    /* do something with the result */
}).catch(function() {
  console.log("BIG FAIL...");
    /* error :( */
})
