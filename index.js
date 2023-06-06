import express from "express";

//import routes from './routes';

class Index {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
    this.listenApp();
  }

  listenApp() {
    this.server.listen(2000);
  }

  middlewares(url) {
    this.server.use(express.json());
  }

  routes() {
    //this.server.use(routes);
    this.server.get("/", (req, res) => {
      return res.send("hey there thisiiii.");
    });
  }
}

const index = new Index();
