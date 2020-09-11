// function renderButton(buttonName){
//     let anotherButton = '';
//     const content = document.querySelector('body');
    
//     anotherButton += `
//         <button class="${buttonName}" type="button">Button</button>
//     `;
//     content.innerHTML = anotherButton;
// }

// renderButton('First one')

function whichButton(e){
    e.preventDefault();
    console.log(e.button)
    if (e.button  === 0){
        console.log("You left clicked");
    }else if (e.button  === 1){
        console.log("You middle clicked");
    }else if (e.button  === 2){
        console.log("You right clicked");
    }
}


const but = document.querySelector('button');

but.addEventListener('click', whichButton);
but.addEventListener('contextmenu', whichButton);

window.addEventListener('resize', ()=>{
    console.log('You change the size of the window!')
})