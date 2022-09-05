let btn = document.getElementById('check');
let display=document.querySelector('.result-print');
btn.addEventListener('click', function checkthenum() {
    let num = document.getElementById('inputdata').value;
    num = Number(num);
    if (num === 0)
        display.innerHTML="Enter a non Zero number!";
    else if (num % 2 === 0)
    display.innerHTML="It's an EVEN number";
    else
    display.innerHTML="It's an ODD number";


});