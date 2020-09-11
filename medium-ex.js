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

// newButton('New Button')

function renderInput(){

    return `
        <form>
            <input type="text">
        </form>
    `
}

function startList(){
    let content = document.querySelector('.content');

    content.innerHTML += renderInput();
    // content.innerHTML = renderButton(submit);
}

function addToList(){
    let buttonName;
    buttonName = document.querySelector('input').value;

    newButton(buttonName);
}

startList();
newButton('Add');

const addBut = document.querySelector('#Add');

addBut.addEventListener('click', addToList);