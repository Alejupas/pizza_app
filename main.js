import navBar from './navbar/navbar.js';
import inputs from './scripts/inputs.js';
import sessionStorage from './sessionStorage/sessionStorage.js';
import renderToDom from './onePizzaCard/renderToDom.js';
import sort from './scripts/sort.js';

//get switch view buttons in NAV
const navMenuButon = document.querySelector('.menu-btn');
const addButton = document.querySelector('.new-pizza-btn');

//get  SORT buttons
const sortName = document.getElementById('sortByName');
const sortPrice = document.getElementById('sortByPrice');
const sortHeat = document.getElementById('sortByHeat');

//get FORM buttons
const submitButton = document.getElementById('submit');
const addTopping = document.querySelector('.add-topping');

navBar('menu');

//EVENT LISTENERS
//switch view buttons in NAV
renderToDom(sessionStorage());
navMenuButon.onclick = () => navBar('menu');
addButton.onclick = () => navBar('');

//SORT event listeners
sortName.onclick = () => renderToDom(sort.sortByName(sessionStorage()));

sortPrice.onclick = () => renderToDom(sort.sortByPrice(sessionStorage()));

sortHeat.onclick = () => renderToDom(sort.sortByHeat(sessionStorage()));

//event listeners - FORM buttons
// SUBMIT
submitButton.addEventListener('click', inputs.submit);
// ADD
addTopping.addEventListener('click', (event) => {
  inputs.addIngredient(event);
});

//get session storage if available
if (!sessionStorage()) sessionStorage([]);
