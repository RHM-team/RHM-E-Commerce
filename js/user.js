import { v4 as uuidv4 } from "uuid";

export class User {
  id;
  name;
  password;
  email;
  active;
  cart;
  constructor(name, email, password, cart, active) {
    this.id = uuidv4();
    this.name = name;
    this.email = email;
    this.password = password;
    this.cart = cart;
    this.active = active;
  }
}
