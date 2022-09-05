document.addEventListener('DOMContentLoaded',function(){
    if( document.querySelector('#range') ){

        document.querySelector('#range').style.display = 'none'; 
    }
    else{

        document.querySelector('#converted-date').style.display = 'none';
    }
})

function ageCalculator(){
    fetch('/date_tools/calculate',{
        method : "POST" ,
        body :JSON.stringify({
            date : document.querySelector('#birthday').value
        })
    })
    .then( response => response.json())
    .then( result => {
        message = document.querySelector('#range');
        message.innerHTML = result.message;
        message.style.display = 'block';
    })
}

function dateConverter(){
    fetch('/date_tools/convert',{
        method : "POST" ,
        body :JSON.stringify({
            date : document.querySelector('#date').value
        })
    })
    .then( response => response.json())
    .then( result => {
        message = document.querySelector('#converted-date');
        message.innerHTML = result.message;
        message.style.display = 'block';
    })
}