import express from "express";
import Routes from "./App/Routes.js";

const server = express();
const port = 3000;

// middleware
server.set("view engine", "ejs");
server.use(express.urlencoded({ extended: true }));

// routes
server.use(Routes);

// listen server
server.listen(port, () => {
  console.log(`Server Listen Port ${port}`);
});
