const express = require('express')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const cors = require('cors')
require('dotenv').config()

const port = process.env.PORT || 5000;
const app = express()

// middleware
app.use(cors());
app.use(express.json());

//deploy to heroku
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.pdqpx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function run() {
    try {

    }

    finally {

    }
}

// education-care-admin 
// APBdCIbK6HhKLNAE
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://education-care-admin:<password>@cluster0.ihvh1.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('warehouse server worked')
})

app.listen(port, () => console.log('port worked'));