import Ticket from "../models/ticket.model.js";


// Get all tickets
export const getTickets = async (req, res) => {
    try {
        const tickets = await Ticket.find();
        res.status(200).json({success: true, data: tickets});
    }catch(error) {
        console.error("Error in fetching tickets", error.message);
        res.status(500).json({success: false, message: "Server error"});
    }
}

// Create a ticket
export const createTicket = async (req, res) => {
    const ticket = req.body;

    if (!ticket.title || !ticket.description || !ticket.category || !ticket.status || !ticket.priority) {
        return res.status(400).json({ message: "Please enter all fields" });
    }

    const newTicket = new Ticket(ticket)

    try {
        await newTicket.save();
        res.status(201).json({success: true, data: newTicket})
    }catch(error) {
        console.error("Error in creating ticket", error.message)
        res.status(500).json({success: false, message: "Server error"});
    }
}

// Update a ticket
export const updateTicket = async (req, res) => {
    const { id } = req.params;

    const ticket = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`No ticket with id: ${id}`);
    }

    try {
        const updatedTicket = await Ticket.findByIdAndUpdate(id, ticket, { new: true });
        res.status(200).json({success: true, data: updatedTicket});
    }catch(error) {
        console.error("Error in updating ticket", error.message);
        res.status(500).json({success: false, message: "Server error"});
    }
}

// Delete a ticket
export const deleteTicket = async (req, res) => {
    const { id } = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`No ticket with id: ${id}`);
    }

    try{
        await Ticket.findByIdAndDelete(id);
        res.status(200).json({success: true, message: "Ticket deleted successfully"});
    }catch(error) {
        console.error("Error in deleting ticket", error.message);
        res.status(500).json({success: false, message: "Server error"});
    }
}