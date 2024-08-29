interface PaymentStrategy {
  pay(amount: number): void;
}

class PaypalStrategy implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Paid ${amount} using PayPal`);
  }
}

class CreditCardStrategy implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Paid ${amount} using credit card`);
  }
}

class BitcoinStrategy implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Paid ${amount} using Bitcoin`);
  }
}

class ShoppingCart {
  private amount: number = 0;

  constructor(private strategy: PaymentStrategy) {}

  setPaymentStrategy(strategy: PaymentStrategy): void {
    this.strategy = strategy;
  }

  addToCart(value: number): void {
    this.amount += value;
  }

  checkout(): void {
    this.strategy.pay(this.amount);
    this.amount = 0;
  }
}

let cart = new ShoppingCart(new PaypalStrategy());
cart.addToCart(100);
cart.addToCart(150);
cart.checkout(); // used paypal

cart.setPaymentStrategy(new CreditCardStrategy());
cart.addToCart(150);
cart.checkout();
