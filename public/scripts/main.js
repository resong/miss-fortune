'use strict';

(function () {

    // Set up variables 
    var MIN = 1;
    var MAX = 4;
    var quoteObject = {
        quote: '',
        details: '',
        source: ''
    };

    // Randomize a number onClick and get random quote
    $('#fortuneBtn').click(function (event) {

        // Default index will be 10
        var randoNum = 10;

        randoNum = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;

        console.log('Random Num: ' + randoNum);

        // DB Call
        getRandomQuote(randoNum);
    });

    // Database service to pull random quote
    var getRandomQuote = function getRandomQuote(randomNum) {

        var dbRef = firebase.database();
        var missFortuneRef = dbRef.ref('quotes');

        var key = 'q' + randomNum;

        // Get object with specified key
        missFortuneRef.orderByKey().equalTo(key).on('child_added', function (snapshot) {

            var snap = snapshot.val();
            quoteObject.quote = snap.quote;
            quoteObject.details = snap.details;
            quoteObject.source = snap.source;

            // Print to page
            $('#quote').html(quoteObject.quote);
        });
    };
})();