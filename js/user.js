export class User {
  id;
  name;
  password;
  email;
  status;
  cart;
  constructor(id, name, email, password, cart, status) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.cart = cart;
    this.status = status;
  }
}
