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
    textarea.style.width = '100%';
    title.style.width = '100%';
    submit.innerHTML = "Submit";
    submit.className = 'btn btn-primary';
    
    fetch(`/notepad/edit/${id}`)
    .then(response => response.json())
    .then(data => {
            
            input.value = data['title'];
            textarea.value = data['content'];
    })
    div.appendChild(titleLabel)
    div.appendChild(input);
    div.appendChild(contentLabel);
    div.appendChild(textarea);
    div.appendChild(br);
    div.appendChild(submit);
    div.style.margin = '20px';
    editDiv.appendChild(div);
    
    submit.addEventListener('click',function(){
        if (document.querySelector('#content-field').value.trim() && document.querySelector('#title-field').value.trim())
        {
            fetch(`/notepad/edit/${id}`, {
                method : 'POST',
                body : JSON.stringify({
                    editedTitle : document.querySelector('#title-field').value ,
                    editedContent : document.querySelector('#content-field').value 
                })
            })
            .then( response => response.json())
            .then( result => {
                editDiv.removeChild(div);
                title.innerHTML = input.value ;
                content.innerHTML = result.content ;
                document.querySelector('#note-div').style.display = 'block';
            })
        }
        else{
            alert("Note content and title can't be None");
        }
    })
}