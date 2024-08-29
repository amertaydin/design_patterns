class MySQLDatabase {
  connectToMySQL(): void {}

  executeMySQLQuery(): void {}
}

class PostgreSQLDatabase {
  connectToPostgres(): void {}

  executePostgresQuery(): void {}
}

class DatabaseAdapter {
  constructor(private postgres: PostgreSQLDatabase) {}

  connectToMySQL(): void {}

  executeMySQLQuery(): void {}
}

let postgres = new PostgreSQLDatabase();
let mysql = new DatabaseAdapter(postgres);
