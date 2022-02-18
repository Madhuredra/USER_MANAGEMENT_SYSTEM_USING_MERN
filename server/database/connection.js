const mongoose = require('mongoose');
require('dotenv').config({ path: 'config' });
const connectDB = async () => {
    try{
        // mongodb connection string
        const con = await mongoose.connect(process.env.MONGO_URL)

        console.log("MongoDB connected");
    }catch(err){
        console.log(err);
        // process.exit(1);
    }
}

module.exports = connectDB