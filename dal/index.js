const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://nhannguyen:mk123456789@chatserver.i44in.mongodb.net/ChatServer?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
    const collection = client.db("test").collection("devices");
    if(err){
      console.error(err);
      process.exit(-1);
  }
  console.log("Successfully connected to MongoDB");
    // client.close();
  });

module.exports = client;
