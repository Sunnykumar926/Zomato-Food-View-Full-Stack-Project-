const mongoose = require("mongoose");

//  it is used to how the server connect with database
const connectDB = () => {
    mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{
        console.log("MongoDB connected");
    })
    .catch((err)=>{
        console.log("MongoDB connection error:", err);
    })
}

module.exports = connectDB;