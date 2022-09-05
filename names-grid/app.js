let names=[
    {
        name:'steve rogers',
        role:'cap'

    },
    {
        name:'tony stark',
        role:'iron man'
    },
    {
        name:'thor',
        role:'god'
    },
    {
        name:'hulk',
        role:'beast'
    },
    {
        name:'t\'challa',
        role:'panther'
    },
    {
        name:'vision',
        role:'robot'
    }
];
const info=document.querySelector('#info');
let details=names.map(function(item){
    return '<div>'+item.name+' '+'is'+' '+item.role+'</div>';
});
info.innerHTML=details.join('\n');



