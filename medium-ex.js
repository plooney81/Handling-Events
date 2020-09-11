function renderButton(button){
    return `
        <div>
            <button type="button" id="${button}">${button}</button>
        </div>
    `
}

function newButton(buttonName) {
    let content = document.querySelector('.content');

    content.innerHTML += renderButton(buttonName)
}


function renderInput(){

    return `
        <form>
            <input type="text">
        </form>
    `
}

function inputForm(){
    let content = document.querySelector('.content');

    content.innerHTML += renderInput();
}

function addToList(){
    let buttonName = document.querySelector('input').value;
    console.log(buttonName);

    newButton(buttonName);
}

inputForm();
newButton('Add');

const addBut = document.querySelector('#Add');
addBut.addEventListener('click', addToList);