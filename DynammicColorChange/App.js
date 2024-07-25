function changeColor(color){
    const dBox = document.querySelector(box);
    dBox.style.background = color;
}

const buttons = document.querySelector(buttons);
buttons.addEventListener('onclick', changeColor)