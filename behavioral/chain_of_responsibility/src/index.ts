interface Handler1 {
  setNext(handler: Handler1): Handler1;
  handle(order: Order): string | null;
}

abstract class AbstractHandler1 implements Handler1 {
  private nextHandler: Handler1 | null = null;

  setNext(handler: Handler1): Handler1 {
    this.nextHandler = handler;
    return handler;
  }

  handle(order: Order): string | null {
    if (this.nextHandler) {
      return this.nextHandler.handle(order);
    }
    return null;
  }
}

class ValidationHandler extends AbstractHandler1 {
  handle(order: Order): string | null {
    if (order.isValid()) {
      return super.handle(order);
    }
    return "Validation Failed";
  }
}

class DiscountHandler extends AbstractHandler1 {
  handle(order: Order): string | null {
    order.applyDiscount();
    return super.handle(order);
  }
}

class PaymentHandler extends AbstractHandler1 {
  handle(order: Order): string | null {
    if (order.processPayment()) {
      return super.handle(order);
    }
    return "Payment failed";
  }
}

class ShippingHandler extends AbstractHandler1 {
  handle(order: Order): string | null {
    order.ship();
    return "Order processed and shipped";
  }
}

class Order {
  isValid(): boolean {
    return true;
  }

  applyDiscount(): void {}

  processPayment(): boolean {
    return true;
  }

  ship(): void {}
}

const order = new Order();
const orderHandler = new ValidationHandler();

orderHandler
  .setNext(new DiscountHandler())
  .setNext(new PaymentHandler())
  .setNext(new ShippingHandler());

console.log(orderHandler.handle(order));
