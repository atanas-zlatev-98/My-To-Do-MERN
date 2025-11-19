const mongoose = require("mongoose");

async function configDatabase() {

  try {
    const connect = await mongoose.connect(process.env.MONGO_DB_URL);
    console.log(`Database Connected at: ${connect.connection.host}`);
  } catch (err) {
    throw new Error(err);
  }
  
}

module.exports = {
  configDatabase,
};
