document.addEventListener('DOMContentLoaded',function(){

    document.querySelector('#calculate').disabled = true;

    document.querySelector('#birthday').onclick = function(){

        if (document.querySelector('#birthday').value){

            document.querySelector('#calculate').disabled = false;
        }
        else{
            document.querySelector('#calculate').disabled = true;
        }
    }
})

function ageCalculator(){
    const date = document.querySelector('#birthday').value;
    document.querySelector('#calculate').addEventListener('click',function(){
        fetch('/age_calculator/calculate',{
            method : "POST" ,
            body :JSON.stringify({
                date : date
            })
        })
        .then( response => response.json())
        .then( result => {
            message = document.querySelector('#message')
            message.innerHTML = result.message
        })
    })
}