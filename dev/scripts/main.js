(function() {

    'use strict';

    // Set up variables 
    const MAX_QUOTES = 4;
    const quoteObject = {
        quote: '',
        details: '',
        source: ''
    };
    let randoNum = 10;                  // default index will be 10
    // let database = firebase.database(); // reference to database service

    // Randomize a number onClick 
    $('#fortuneBtn').on('click', (e) => {
        randoNum = Math.floor(Math.random() * MAX_QUOTES);
        console.log('Random Num: ' + randoNum);
    });

})();


// // JS
// let missFortune = {};

// missFortune.MAX_QUOTES = 50;

// missFortune.randoNum;
// missFortune.quoteObject = {
//     quote: '',
//     details: '',
//     source: ''
// };

// // Randomize a number onClick
// $('#fortuneButton').on('click', (e) => {

//     missFortune.randoNum = Math.floor(Math.random() * missFortune.MAX_QUOTES);

//     console.log('Random Num: ' + missFortune.randoNum);

// });

// Pull object from db based on random number



// Store object in new js object
// Print items to page


// missFortune.init = () => {
    
// }

// $(function() {
//     missFortune.init();
// });