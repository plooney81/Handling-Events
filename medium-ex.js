// function renderButton(button){
//     return `
//         <div>
//             <button type="button" id="${button}">${button}</button>
//         </div>
//     `
// }

function newButton(buttonName) {
    let content = document.querySelector('.content');

    newStuff = `<button type="button" id="${buttonName}">${buttonName}</button>`
    
    content.innerHTML += '<div>' + newStuff + '</div>';
}


// function renderInput(){

//     return `
//         <form>
//             <input type="text">
//         </form>
//     `
// }

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


// function addToList(){
//     let buttonName = document.querySelector('input').value;
//     document.querySelector('input').value = '';
//     console.log(buttonName);

//     newButton(buttonName);
// }

inputForm();
// deleteButton('add');

// newButton('Pete');
// newButton('David');
// newButton('Shannon');
// newButton('Beth');

// const addBut = document.querySelector('#add');
// addBut.addEventListener('click', ()=>{
//     newButton(document.querySelector('input').value);
//     clearInput();
// });


// addBut.addEventListener('click', alertFunct);

// window.addEventListener('DOMContentLoaded', function(){
//     const addBut = document.querySelector('button');
//     addBut.addEventListener('click', newButton(document.querySelector('input').value));
// });

