document.addEventListener('DOMContentLoaded', function() {

    document.querySelector('#submit-note').disabled = true;
    
    document.querySelector('#content').onkeyup = function(){
        if (document.querySelector('#content').value.trim()){
            document.querySelector('#submit-note').disabled = false;
        }
        else{
            document.querySelector('#submit-note').disabled = true;
        }
    }
    
    document.querySelector('#notes-btn').addEventListener('click',showNotes);
    document.querySelector('#add-note-btn').addEventListener('click',showAddNotePage);
    showNotes();
})

function showNotes(){
    document.querySelector('#new-note-div').style.display= 'none';
    document.querySelector('#notes-div').style.display= 'block';
}

function showAddNotePage(){
    document.querySelector('#content').value = ""
    document.querySelector('#title').value = ""
    document.querySelector('#notes-div').style.display= 'none';
    document.querySelector('#new-note-div').style.display= 'block';
    document.querySelector('#new-note-div').className = 'container';
}
