export class Product {
  id;
  category;
  title;
  description;
  avatar;
  price;
  quntity;
  constructor(id, category, title, description, avatar, price, quntity) {
    this.id = id;
    this.category = category;
    this.title = title;
    this.description = description;
    this.avatar = avatar;
    this.price = price;
    this.quntity = quntity;
  }
}
