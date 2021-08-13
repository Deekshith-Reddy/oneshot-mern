const express = require('express')
const mongoose = require('mongoose')
const College = require('./models/College')
require('dotenv/config')
const cors = require('cors')

const app = express()
app.use(cors())
const PORT = process.env.PORT || 9000;


app.get("/college", async (req, res) => {
    try{
        const query = await College.find().limit(10);
        res.json(query)
    }catch (err) {
        res.json({message: err})
    }
})

app.get("/college/similar/:city", async(req, res) => {
    const search = req.params.city;
    if(search == null) {
        search = "Hyderabad"
    }
    College.find({city:search})
        .limit(15)
        .exec((err, data) => {
            if(err) res.json({message: err})
            else res.json(data)
        })
})


const URI = process.env.MONGO_URI
mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log('connected to DB!');
})

if(process.env.NODE_ENV == "production"){
    app.use(express.static("frontend/build"))
    const path = require("path")
    app.get('*', (req, res ) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    })
}



app.listen(PORT, () => {
    console.log('Server started at a port '+ PORT);
})