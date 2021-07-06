import sessionStorage from '../sessionStorage/sessionStorage.js';

const menuDiv = document.querySelector('.menu');

let pizzas = [];

export default function renderToDom(pizzaOrders) {
  menuDiv.innerHTML = '';

  if (pizzaOrders == null) {
    menuDiv.innerHTML = '<h1>There are no pizzas</h1>';
  } else {
    pizzaOrders.forEach((item) => {
      return (menuDiv.innerHTML += `
        <div class='one-pizza-card'>
              <div class='card-photo' style='background-image: url(${item.photo})'></div>
              <div class='card-name'>${item.name}</div>
              <div class='card-heat' style='background-image: url("./images/${item.heat}.png")'/>
              <div id='card-toppings'><p>${item.toppings}</p></div>
              <div class='card-price'>€${item.price}</div>
              <div class='card-delete-container'>
              <button class='delete'>Delete</button>
              </div>
              <div class="card-delete">
                <h2 class='confirm'>Confirm to delete order ?</h2>
                <div class='modal-buttons'>
                <button class="modaltbn reject-delete-pizza">No</button>
                <button class="modaltbn delete-pizza" id=${item.index}>Yes Delete</button>
                  </div>
              </div>
          </div>`);
    });
  }

  const deleteButton = document.getElementsByClassName('delete');
  const deleteModal = document.getElementsByClassName('card-delete');
  const confirmToDelete = document.getElementsByClassName('delete-pizza');
  const declineToDelete = document.getElementsByClassName(
    'reject-delete-pizza'
  );

  for (let i = 0; i < deleteButton.length; i++) {
    deleteButton[i].onclick = () => {
      deleteModal[i].style.display = 'flex';
    };

    declineToDelete[i].onclick = () => {
      deleteModal[i].style.display = 'none';
    };

    confirmToDelete[i].onclick = () => {
      const currentSessionStorage = pizzaOrders;
      pizzas = currentSessionStorage.filter(
        (item) => Number(item.index) !== Number(confirmToDelete[i].id)
      );
      sessionStorage(pizzas);
      renderToDom(pizzas);
    };
  }
}
