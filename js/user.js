export class User {
  id;
  name;
  password;
  email;
  active;
  cart;
  orders;
  constructor(id, name, email, password, cart, active, orders) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.cart = cart;
    this.active = active;
    this.orders = orders;
  }
}
