export class Product {
  id;
  category;
  title;
  description;
  avatar;
  price;
  quantity;
  constructor(id, category, title, description, avatar, price, quantity) {
    this.id = id;
    this.category = category;
    this.title = title;
    this.description = description;
    this.avatar = avatar;
    this.price = price;
    this.quantity = quantity;
  }
}
