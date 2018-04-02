(function() {

    // Set up variables 
    const MIN = 1;
    const MAX = 4;
    const quoteObject = {
        quote: '',
        details: '',
        source: ''
    };
    
    // Randomize a number onClick and get random quote
    $('#fortuneBtn').click(event => {
        
        // Default index will be 10
        let randoNum = 10;                  
        
        randoNum = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
        
        console.log('Random Num: ' + randoNum);

        // DB Call
        getRandomQuote(randoNum);
    });
    
    // Database service to pull random quote
    let getRandomQuote = (randomNum) => {
        
        let dbRef = firebase.database(); 
        let missFortuneRef = dbRef.ref('quotes');

        let key = 'q' + randomNum;

        // Get object with specified key
        missFortuneRef.orderByKey().equalTo(key).on('child_added', (snapshot) => {
                
            let snap = snapshot.val();
            quoteObject.quote = snap.quote;
            quoteObject.details = snap.details;
            quoteObject.source = snap.source;

            // Print to page
            $('#quote').html(quoteObject.quote);
        });
    };

})();
