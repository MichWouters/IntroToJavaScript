let letMeDoMyStuff = 139;
let tweet = prompt('Compose your tweet');
let tweetLength = tweet.length;


console.log(tweet[3]);


let output = 'You have written ' + tweetLength + ' characters. You have ' + ((letMeDoMyStuff + 1) - tweetLength) + ' characters left.'
console.log(output);

console.log(tweet.substring(0, letMeDoMyStuff));
