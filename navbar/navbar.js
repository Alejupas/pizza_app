const createPizzaView = document.querySelector('.create-pizza');
const menuView = document.querySelector('.menu');
const menuContainer = document.querySelector('.menu-container');
const navMenuButton = document.querySelector('.menu-btn');
const navNewPizzaButton = document.querySelector('.new-pizza-btn');

export default (nav) => {
  if (nav === 'menu') {
    menuView.style.display = 'grid';
    menuContainer.style.display = 'block';
    createPizzaView.style.display = 'none';
    navMenuButton.classList.add('active');
    navNewPizzaButton.classList.remove('active');
  } else {
    createPizzaView.style.display = 'flex';
    menuView.style.display = 'none';
    menuContainer.style.display = 'none';
    navMenuButton.classList.remove('active');
    navNewPizzaButton.classList.add('active');
  }
};
