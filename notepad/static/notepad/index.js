document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#add-note-btn').disabled = true;
    document.querySelector('#content').onkeyup = function(){
        if (document.querySelector('#content').value.trim()){
            document.querySelector('#add-note-btn').disabled = false;
        }
        else{
            document.querySelector('#add-note-btn').disabled = true;
        }
    }
})

