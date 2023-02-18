const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const RRSchema = new Schema({
    quantum: Number,
    documents: [
        {
            processName: String,
            burstTime: Number,
            arrivalTime: Number,
        }
    ]
});

module.exports = mongoose.model('model', RRSchema);