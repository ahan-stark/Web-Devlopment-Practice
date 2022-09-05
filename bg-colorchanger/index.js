 let colors=['blue','red','yellow','green','brown','orange','pink','purple','black'];
 let button=document.getElementById('def');
 button.addEventListener('click',function(){
    let index = parseInt((Math.random()*colors.length)+1);
    let change=document.getElementById('abc');
    change.style.background = `${colors[index]}`;
 });