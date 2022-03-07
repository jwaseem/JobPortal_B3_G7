const mongoose = require("mongoose");
//database connection
dbConnect();
async function dbConnect() {
  try {
    // await mongoose.connect('mongodb+srv://gana:gana@fsd.m5nes.mongodb.net/jobportal',{useNewUrlParser:true});
    await mongoose.connect(
      "mongodb+srv://userone:userone@ictakfiles.mxjse.mongodb.net/JOBPORTAL?retryWrites=true&w=majority",
      { useNewUrlParser: true }
    );
    console.log("MongoDB connected");
  } catch (error) {
    console.log("Mongo DB connection unsuccessful");
  }
}

module.exports = mongoose;
