export default (item) => {
  if (!!item) sessionStorage.setItem('pizzaOrders', JSON.stringify(item));
  return JSON.parse(sessionStorage.getItem('pizzaOrders'));
};
