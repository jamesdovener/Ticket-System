import mongoose from 'mongoose';

const ticketSchema = mongoose.Schema({

    title: { type: String, required: true},
    description: { type: String, required: true},
    category: { type: String, enum: ["Bug", "Feature Request", "Support"], required: true},
    status: { type: String, enum: ["Open", "In Progress", "Closed"], required: true},
    priority: { type: String, enum: ["Low", "Medium", "High"], required: true},
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
}, {
    timestamps: true
});

const Ticket = mongoose.model('Ticket', ticketSchema);

export default Ticket;