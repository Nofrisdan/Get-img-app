import express from "express";
import { get_url, index_page } from "./Controller.js";
const Routes = express.Router();

Routes.get("/", index_page);
Routes.post("/get-url", get_url);

export default Routes;
