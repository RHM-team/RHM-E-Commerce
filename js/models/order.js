export class Order {
  id;
  date;
  order_total;
  constructor(id, date, order_total) {
    this.id = id;
    this.date = date;
    this.order_total = order_total;
  }
}
