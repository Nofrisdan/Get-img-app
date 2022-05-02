import express from "express";
import { index_page } from "./Controller.js";
const Routes = express.Router();

Routes.get("/", index_page);

export default Routes;
