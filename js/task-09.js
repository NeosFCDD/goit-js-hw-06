function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body');
const changeColorBtn = document.querySelector('.change-color');
const textColorName = document.querySelector('.color');

changeColorBtn.addEventListener('click', changeColorNow);

function changeColorNow(){
  bodyEl.style.backgroundColor = getRandomHexColor ();
  textColorName.textContent = getRandomHexColor ();
}