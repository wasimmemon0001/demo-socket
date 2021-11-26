import dotenv from "dotenv";
import "reflect-metadata";
dotenv.config();
import express from "express";
import { createConnection } from "typeorm";
import ormConfig from "./ormconfig";
import { Routes } from "./routes";
import handleError from "./middlewares/error-handler.middleware";
import { CONSTANTS } from "./config/constants";
import * as socketio from "socket.io";
import * as http from "http";



class Server {
  private app: express.Application;
  private routers: Routes = new Routes();
  constructor() {
    this.app = express(); // init the application
    this.configuration();
    this.routes();
  }

  /**
   * Method to configure the server,
   * If we didn't configure the port into the environment 
   * variables it takes the default port 3000
   */
  public configuration() {
    this.app.set("port", process.env.PORT || 3001);
    this.app.use(express.json());
  }

  /**
   * Method to configure the routes
   */
  public async routes() {
    // Establish the DB Connection
    createConnection(ormConfig).then(() => {
      console.log("Database connection success!");
    });
  }

  /**
   * Used to start the server
   */
  public start() {
    const serverDetail = http.createServer(this.app);
    const io = new socketio.Server(serverDetail);

    io.on("connection", (socket : any) => {
      this.routers.path(socket);
    });

    serverDetail.listen(this.app.get("port"), () => {
      console.log("Running at localhost:" + this.app.get("port"));
    });
  }
}

 const server: any = new Server(); // Create server instance
server.start(); // Execute the server
