interface Database {
  connect(): void;
  query(sql: string): any;
  close(): void;
}

class PostgreSQLDatabase implements Database {
  connect(): void {
    console.log("connecting Postgre DB");
  }

  query(query: string) {
    console.log(`querying ${query}`);
  }

  close(): void {
    console.log("closing pOSTGRE Connection");
  }
}

class MongoDBDatabase implements Database {
  connect(): void {
    console.log("connecting mongoDB");
  }

  query(query: string) {
    console.log(`querying ${query}`);
  }

  close(): void {
    console.log("closing mongoDB Connection");
  }
}

abstract class DatabaseService {
  constructor(protected database: Database) {}

  abstract fetchData(query: string): any;
}

class ClientDatabaseService extends DatabaseService {
  fetchData(query: string) {
    this.database.connect();
    this.database.query(query);
    this.database.close();
  }
}

const mongo = new MongoDBDatabase();
const clientDB = new ClientDatabaseService(mongo);
clientDB.fetchData("user");
