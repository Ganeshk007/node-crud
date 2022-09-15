import mongoose from 'mongoose';

var schema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        default: ''
    },
    phone: String,
});

var user = new mongoose.model('user', schema);

module.exports = user;