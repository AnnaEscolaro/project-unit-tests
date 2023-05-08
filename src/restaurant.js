/* eslint-disable max-len */
// Siga as orientações do README!

const createMenu = (menu) => ({
  fetchMenu: () => menu,
  consumption: [],
  order(el) {
    if (el in menu.food || el in menu.drinks) {
      return this.consumption.push(el);
    }
    return 'Item indisponível';
  },
  pay() {
    let dueAmount = 0;
    this.consumption.forEach((item) => {
      if (item in menu.food) {
        dueAmount += menu.food[item];
      }
      if (item in menu.drinks) {
        dueAmount += menu.drinks[item];
      }
    });
    return (dueAmount * 1.1);
  },
});

console.log(createMenu({ food: { pizza: 10.00 }, drinks: { coca: 3.50 } }));

module.exports = createMenu;
