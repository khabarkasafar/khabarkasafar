const mongoose = require("mongoose");

const uri =
  "mongodb+srv://saurabhkumar:rVKACHYbuzYy7VMs@cluster0.n4zogin.mongodb.net/blogginggg?retryWrites=true&w=majority";

const db = async () => {
  mongoose.set('strictQuery', false);
  try {
    await mongoose.connect(uri);
    const dbs = mongoose.connection;
    if (dbs) {
      console.log('connected to mongodb database...');
    } else {
      console.log('error in  conecting to the uri');
    }
  } catch (error) {
    console.error(error);
  }
};

module.exports = db;
