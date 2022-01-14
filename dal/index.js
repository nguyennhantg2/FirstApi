const {MongoClient} = require("mongodb");

const client = new MongoClient("mongodb+srv://nhannguyen:mk12345@chatserver.i44in.mongodb.net/ChatServer?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


client.connect(err => {
    if(err){
        console.error(err);
        process.exit(-1);
    }
    console.log("Successfully connected to MongoDB");
});


module.exports = client;
