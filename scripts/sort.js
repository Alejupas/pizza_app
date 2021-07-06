export default {
  sortByName: (orders) => {
    return orders.sort((a, b) => (a.name > b.name ? 1 : -1));
  },

  sortByPrice: (order) => {
    return order.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
  },

  sortByHeat: (order) => {
    return order.sort((a, b) => (a.heat > b.heat ? 1 : -1));
  },
};
