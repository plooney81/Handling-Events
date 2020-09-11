function renderButton(button){
    return `
        <div>
            <button type="button" id="${button}">${button}</button>
        </div>
    `
}

function newButton(buttonName) {
    console.log('Yo')
    let content = document.querySelector('.content');
    

    content.innerHTML += renderButton(buttonName);
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

function clearInput(){
    document.querySelector('input').value = '';
}

// function addToList(){
//     let buttonName = document.querySelector('input').value;
//     document.querySelector('input').value = '';
//     console.log(buttonName);

//     newButton(buttonName);
// }

inputForm();
newButton('Add');

const addBut = document.querySelector('#Add');
addBut.addEventListener('click', ()=>{
    newButton(document.querySelector('input').value);
    clearInput();
});