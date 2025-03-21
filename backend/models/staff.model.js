import mongoose from "mongoose";

const staffSchema = mongoose.Schema({
    employeeid: {
        type: Number,
        required: true,
        unique: true
    },
    
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

const Staff = mongoose.model('Staff', staffSchema);
export default Staff;
