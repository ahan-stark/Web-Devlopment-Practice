let date = new Date();
let dayofweeknumber=date.getDay();
let nameofday;
let quote;
switch(dayofweeknumber){
    case 0: 
        nameofday = 'Sunday';
        quote = 'Time to chillax!';
        break;
    case 1:
        nameofday = 'Monday';
        quote = 'Monday morning blues!';
        break;
    case 2:
        nameofday = 'Tuesday';
        quote = 'Taco Time!';
        break;
    case 3:
        nameofday = 'Wednesday';
        quote = 'Two more days to the weekend.';
        break;
    case 4:
        nameofday = 'Thursday';
        quote = 'The weekend is almost here...';
        break;
    case 5:
        nameofday = 'Friday';
        quote = 'Weekend is here!';
        break;
    case 6:
        nameofday = 'Saturday';
        quote = 'Time to party!';
        break;
}
let weekdayDiv = document.getElementById('weekday');
let quoteDiv = document.getElementById('quote');
weekdayDiv.innerHTML = `${nameofday}`;
quoteDiv.innerHTML = `${quote}`;