function newButton(buttonName) {
    let content = document.querySelector('.content');
    let newStuff = '';
    
    if (buttonName === "add"){
        newStuff = `<button type="button" id="${buttonName}">Add Item To List</button>`
    }else{
        newStuff = `<button type="button" id="${buttonName}" class="added">${buttonName}</button>`
    }
    content.innerHTML += '<div>' + newStuff + '</div>';
}

function inputForm(){
    let content = document.querySelector('.content');

    let newStuff = `
        <form>
            <input type="text">
        </form>
    `


    content.innerHTML += '<div>' + newStuff + '</div>';
}

function clearInput(){
    document.querySelector('input').value = '';
}

function deleteButton(buttonName){    
    let buttonToDelete = document.querySelector(`#${buttonName}`);

    buttonToDelete.remove();
}

newButton('add');
inputForm();

// the picks up every click that is recieved and then looks at the element that was clicked (the "target") and decides what to do based on their class and ID
document.addEventListener('click', function(e){
    if(e.target.getAttribute('class') == "added"){
        deleteButton(e.target.getAttribute('id'))
    }else if(e.target.getAttribute('id') == "add"){
        newButton(document.querySelector('input').value)
        clearInput();
    }
  })