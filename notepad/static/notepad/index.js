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
    document.querySelector('#content').value = "";
    document.querySelector('#title').value = "";
    document.querySelector('#notes-div').style.display= 'none';
    document.querySelector('#new-note-div').style.display= 'block';
}


function editNote(id){
    document.querySelector('#content').value = ""
    document.querySelector('#title').value = ""
    document.querySelector('#notes-div').style.display= 'none';
    document.querySelector('#new-note-div').style.display= 'block';
}

function editNote(id){
    document.querySelector('#note-div').style.display = 'none';
    const title = document.querySelector('#note-title');
    const content = document.querySelector('#note-content');
    let editDiv = document.querySelector('#edit-note-div');
    const br = document.createElement('br');
    let titleLabel = document.createElement('label');
    titleLabel.innerHTML = "title";
    let contentLabel = document.createElement('label');
    contentLabel.innerHTML = "content";
    let div = document.createElement('div');
    let input = document.createElement('INPUT');
    input.setAttribute("type", "text");
    input.id = 'title-field';
    let textarea= document.createElement('textarea');
    textarea.setAttribute("rows",20);
    textarea.id = 'content-field';
    let submit = document.createElement('button');
    textarea.className = 'form-control';
    input.className = 'form-control';
    input.value = title.innerHTML;
    textarea.value = content.innerHTML;
    textarea.style.width = '100%';
    title.style.width = '100%';
    submit.innerHTML = "Submit";
    submit.className = 'btn btn-primary';
    div.appendChild(titleLabel)
    div.appendChild(input);
    div.appendChild(contentLabel);
    div.appendChild(textarea);
    div.appendChild(br);
    div.appendChild(submit);
    div.style.margin = '20px';
    editDiv.appendChild(div);


    submit.addEventListener('click',function(){
        if (!document.querySelector('#content-field').value.trim())
        {
            alert("Note content can't be None");
        }
        else{
            
            editDiv.removeChild(div);
        }
    })
}