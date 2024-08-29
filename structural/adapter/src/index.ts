class Rectangle {
  constructor(private width: number, private height: number) {}

  public getWidth(): number {
    return this.width;
  }

  public getHeight(): number {
    return this.height;
  }

  public area(): number {
    return this.height * this.width;
  }
}

class Square {
  constructor(private side: number) {}

  public getSide(): number {
    return this.side;
  }

  public area(): number {
    return this.side * this.side;
  }
}

class SquareToRectangle {
  constructor(private square: Square) {}

  public getWidth(): number {
    return this.square.getSide();
  }

  public getHeigth(): number {
    return this.square.getSide();
  }

  public area(): number {
    return this.square.area();
  }
}

let square = new Square(4);
let rectangle = new SquareToRectangle(square);
