const customer = {
  username: 'Mango',
  balance: 24000,
  discount: 0.1,
  orders: ['Burger', 'Pizza', 'Salad'],
  // Change code below this line

  // Метод для отримання балансу
  getBalance() {
    return this.balance; // Використовуємо this для доступу до властивості об'єкта
  },

  // Метод для отримання знижки
  getDiscount() {
    return this.discount; // Використовуємо this для доступу до властивості об'єкта
  },

  // Метод для встановлення нової знижки
  setDiscount(value) {
    this.discount = value; // Використовуємо this для оновлення значення властивості
  },

  // Метод для отримання замовлень
  getOrders() {
    return this.orders; // Використовуємо this для доступу до властивості об'єкта
  },

  // Метод для додавання замовлення
  addOrder(cost, order) {
    this.balance -= cost - cost * this.discount; // Використовуємо this для оновлення балансу
    this.orders.push(order); // Використовуємо this для додавання нового замовлення до масиву
  },
  // Change code above this line
};

// Перевірка роботи методів
customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15
customer.addOrder(5000, 'Steak');
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]
