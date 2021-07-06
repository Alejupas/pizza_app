import sessionStorage from './../sessionStorage/sessionStorage.js';
import renderToDom from '../onePizzaCard/renderToDom.js';
import navBar from '../navbar/navbar.js';

let allToppings = [];

let pizza = {
  name: '',
  price: '',
  heat: '',
  toppings: '',
  photo: '',
};

const nameInput = document.querySelector('.name-input');
const priceInput = document.querySelector('.price-input');
const selectHeat = document.getElementById('heat');
const toppingsInput = document.querySelector('.toppings-input');
const selectPhoto = document.querySelector('.pizza-photo');
const toppingsList = document.querySelector('.toppings');
const validationErrorsDiv = document.querySelector('.validationErrors');

function toppingAdd() {
  allToppings.push(toppingsInput.value);

  toppingsList.innerHTML += `<li>${toppingsInput.value}</li>`;
  toppingsInput.value = '';
}

let validationErrors = [];

export default {
  submit: () => {
    toppingsList.innerHTML = '';
    validationErrorsDiv.innerHTML = '';

    validations();

    if (validationErrors.length !== 0) {
      validationErrors.forEach((err) => {
        validationErrorsDiv.innerHTML += err;
      });
      return;
    }

    let allPizzas = sessionStorage();
    pizza.name = nameInput.value;
    pizza.photo = selectPhoto.value;
    pizza.heat = selectHeat.value;
    pizza.price = priceInput.value;
    pizza.toppings = allToppings.join(',');

    allPizzas.push(pizza);
    allPizzas.forEach((item, i) => {
      item.index = i;
    });

    renderToDom(allPizzas);
    sessionStorage(allPizzas);

    pizza.name = '';
    pizza.photo = '';
    pizza.heat = '';
    pizza.price = '';
    pizza.toppings = '';

    nameInput.value = null;
    selectPhoto.value = null;
    selectHeat.value = null;
    priceInput.value = null;
    allToppings = [];

    navBar('menu');
  },

  pizzaHeat: () => {
    for (let i = 0; i < 4; i++) {
      if (i === 0) {
        pizza.heat = `./images/0.png`;
      }
      if (i === 1) {
        pizza.heat = `./images/1.png`;
      }
      if (i === 2) {
        pizza.heat = `./images/2.png`;
      }
      if (i === 3) {
        pizza.heat = `./images/3.png`;
      }
    }
  },

  addIngredient: (event) => {
    if (
      event.type === 'click' &&
      toppingsInput.value !== '' &&
      toppingsInput.value.length > 1
    )
      toppingAdd();
  },
};

function validations() {
  if (nameInput.value.length > 30 || nameInput.value.length === 0) {
    validationErrors.push('Name cannot be blank or over 30 characters long');
  }

  if (priceInput.value < 0) {
    validationErrors.push('Price must be positive number');
  }

  if (priceInput.value === '') {
    validationErrors.push('Please set the price for order');
  }

  if (allToppings.length < 2) {
    validationErrors.push('Must be at least more than 1 topping');
  }
}
