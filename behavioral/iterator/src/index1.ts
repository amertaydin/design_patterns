class ArrayIterator<T> {
  private position: number = 0;
  constructor(private collection: T[]) {}

  public next(): T {
    // Get next element in the colletion
    const result = this.collection[this.position];
    this.position++;
    return result;
  }

  public hasNext(): boolean {
    return this.position < this.collection.length;
  }
}

const array: number[] = [1, 2, 3, 4, 5, 6];
const array1: string[] = ["hello", "world"];

const iterator = new ArrayIterator<number>(array);

if (iterator.hasNext()) {
  iterator.next();
}

const iterator1 = new ArrayIterator<string>(array1);
