class Storage {
  #items; // Приватна властивість для зберігання товарів

  constructor(initialItems) {
    this.#items = initialItems;
  }

  // Повертає поточний список товарів
  getItems() {
    return this.#items;
  }

  // Додає новий товар до списку
  addItem(newItem) {
    this.#items.push(newItem);
  }

  // Видаляє товар зі списку
  removeItem(itemToRemove) {
    const itemIndex = this.#items.indexOf(itemToRemove);
    if (itemIndex !== -1) {
      this.#items.splice(itemIndex, 1);
    }
  }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

