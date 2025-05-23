const mongoose = require("mongoose");
const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log(
            "MongoDB Connected",
            conn.connection.host,
            conn.connection.name
        );
    } catch (error) {
        console.log(error);
        process.exit(1);
    }

}
module.exports = connectDb;