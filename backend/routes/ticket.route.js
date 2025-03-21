import express from 'express';
import mongoose from 'mongoose';

import ticketRoutes from '../models/ticket.model.js';
import { createTicket, getTickets, updateTicket, deleteTicket } from '../controllers/ticket.controller.js';


const router = express.Router();

router.get("/", getTickets);
router.post("/", createTicket);
router.put("/:id", updateTicket);
router.delete("/:id", deleteTicket);

export default router;