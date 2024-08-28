interface Employee {
  getName(): string;
  getSalary(): number;
  getRole(): string;
}

class Developer implements Employee {
  constructor(private name: string, private salary: number) {}

  getName(): string {
    return this.name;
  }

  getSalary(): number {
    return this.salary;
  }

  getRole(): string {
    return "Developer";
  }
}

class Designer implements Employee {
  constructor(private name: string, private salary: number) {}

  getName(): string {
    return this.name;
  }

  getSalary(): number {
    return this.salary;
  }

  getRole(): string {
    return "Designer";
  }
}

// Composite
interface CompositeEmployee extends Employee {
  addEmployee(employee: Employee): void;
  removeEmployee(employee: Employee): void;
  getEmployees(): Employee[];
}

class Manager implements CompositeEmployee {
  private employees: Employee[] = [];

  constructor(private name: string, private salary: number) {}

  getName(): string {
    return this.name;
  }

  getSalary(): number {
    return this.salary;
  }

  getRole(): string {
    return "Manager";
  }

  addEmployee(employee: Employee) {
    this.employees.push(employee);
  }

  removeEmployee(employee: Employee) {
    const index = this.employees.indexOf(employee);
    if (index !== -1) this.employees.splice(index, 1);
  }

  getEmployees(): Employee[] {
    return this.employees;
  }
}

let dev1 = new Developer(`Mert`, 60000);
let designer1 = new Designer("laura", 30000);
let manager = new Manager("James", 10000);

manager.addEmployee(dev1);
manager.addEmployee(designer1);
manager.getEmployees();
manager.removeEmployee(designer1);
manager.getEmployees();
