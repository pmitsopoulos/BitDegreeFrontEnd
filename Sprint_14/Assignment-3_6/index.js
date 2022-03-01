const text = document.getElementById("mytext");
function flash()
{  
    text.style.color = (text.style.color=='red') ? 'green' : 'red';
}

setInterval(()=>{
    flash();
},300);

