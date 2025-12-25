const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const url = process.env.DB_URL || `mongodb://localhost:${process.env.DB_PORT}/${process.env.DB_NAME}`;
        
        await mongoose.connect(url);
        console.log("MongoDB connected");
    } catch (e) {
        console.log("MongoDB connection error", e);
        process.exit(1);
    }
}

module.exports = connectDB;
