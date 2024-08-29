interface ServerRequest {
  handle(request: any): void;
}

class BaseServer implements ServerRequest {
  handle(request: any): void {
    console.log(`Handling request: `, request);
  }
}

abstract class ServerRequestDecorator implements ServerRequest {
  constructor(protected serverRequest: ServerRequest) {}
  abstract handle(request: any): void;
}

class LoggingMiddleware extends ServerRequestDecorator {
  constructor(serverRequest: ServerRequest) {
    super(serverRequest);
  }
  handle(request: any): void {
    console.log(`Logging request: `, request);
    this.serverRequest.handle(request);
  }
}

class AuthMiddleware extends ServerRequestDecorator {
  constructor(serverRequest: ServerRequest) {
    super(serverRequest);
  }
  handle(request: any): void {
    if (request.auth === false) {
      console.log("unauthorized access");
    } else {
      console.log(`Auth request: `, request);
      this.serverRequest.handle(request);
    }
  }
}

const request = {
  body: "hello world",
  auth: false,
};

let baseServer = new BaseServer();
baseServer = new LoggingMiddleware(baseServer);
baseServer = new AuthMiddleware(baseServer);
baseServer.handle(request);
