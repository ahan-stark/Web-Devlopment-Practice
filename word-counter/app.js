let button=document.getElementById("butn");
button.addEventListener('click',function(){
    let word = document.getElementById('str').value;
    let count=word.length;
    let result=document.getElementById('output');

result.innerHTML = `<h1>${count}</h1>`;

});