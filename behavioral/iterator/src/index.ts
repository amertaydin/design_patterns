class User {
  constructor(public name: string) {}
}

interface MyIteratorResult<T> {
  value: T | null;
  done: boolean;
}

interface MyIterator<T> {
  next(): MyIteratorResult<T>;
  hasNext(): boolean;
}

interface Collection<T> {
  createIterator(): MyIterator<T>;
}

class UserCollection implements Collection<User> {
  constructor(private users: User[]) {}

  createIterator(): MyIterator<User> {
    return new UserIterator(this);
  }
  getItems(): User[] {
    return this.users;
  }
}

class UserIterator implements MyIterator<User> {
  private position: number = 0;

  constructor(private collection: UserCollection) {}

  next() {
    if (this.hasNext()) {
      return {
        value: this.collection.getItems()[this.position++],
        done: false,
      };
    } else {
      return { value: null, done: true };
    }
  }

  hasNext(): boolean {
    return this.position < this.collection.getItems().length;
  }
}

const users = [new User("Alice"), new User("Bob"), new User("Charlie")];

const userCollection = new UserCollection(users);

// create Iterator
const userIterator = userCollection.createIterator();

console.log(userIterator.next());
