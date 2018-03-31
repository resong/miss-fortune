'use strict';

// JS
var missFortune = {};

missFortune.MAX_QUOTES = 50;

missFortune.randoNum;
missFortune.quoteObject = {
    quote: '',
    details: '',
    source: ''
};

// Randomize a number onClick
$('#fortuneButton').on('click', function (e) {

    missFortune.randoNum = Math.floor(Math.random() * missFortune.MAX_QUOTES);

    console.log('Random Num: ' + missFortune.randoNum);
});

// Pull object from db based on random number


// Store object in new js object
// Print items to page


// missFortune.init = () => {

// }

// $(function() {
//     missFortune.init();
// });