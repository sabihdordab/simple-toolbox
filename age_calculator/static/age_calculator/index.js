document.addEventListener('DOMContentLoaded',function(){
    document.querySelector('#message').style.display = 'none';
})

function ageCalculator(){
    fetch('/age_calculator/calculate',{
        method : "POST" ,
        body :JSON.stringify({
            date : document.querySelector('#birthday').value
        })
    })
    .then( response => response.json())
    .then( result => {
        message = document.querySelector('#message');
        message.innerHTML = result.message;
        message.style.display = 'block';
    })
}