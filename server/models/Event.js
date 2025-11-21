import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    proposedBy: {
        type: String,
        default: 'Anonymous'
    },
    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        default: 'pending'
    },
    type: {
        type: String,
        default: 'Propozim'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Event = mongoose.model('Event', eventSchema);

export default Event;
