import express from "express";
import { allRecord, deleteRecord, newRecord, oneRecord, updateRecord, } from "../Controllers/controller.js";

const route = express.Router()
route.get('/info', allRecord)
route.get('/info/:id', oneRecord)
route.put('/info', newRecord)
route.patch('/info/:id', updateRecord)
route.delete('/info/:id', deleteRecord)

export default route;