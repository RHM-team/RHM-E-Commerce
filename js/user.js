export class User {
  id;
  name;
  password;
  email;
  active;
  cart;
  orders;
  favorite
  constructor(id, name, email, password, cart, active, orders ,favorite) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.cart = cart;
    this.active = active;
    this.favorite = favorite;
    this.orders = orders;
  }
}
