const express = require("express");
const app = express();
const subscribers = require('./models/subscribers')


//routes



app.get('/subscribers', async (req,res) => {
    try {
        // Use Mongoose model to query the database
        const AllSubs = await subscribers.find(); 
        res.status(200).json(AllSubs);
      } catch (err) {
        console.error('Failed to retrieve users:', err);
        res.status(500).send({message: "Something Went Wrong!! Failed to retrieve data"});
      }
})


app.get('/subscribers/names', async (req, res) => {

    try {
        // array of subscribers with only name and channel fields.
        const AllNames = await subscribers.find({}, {_id:0, name: 1, subscribedChannel: 1});
        res.status(200).json(AllNames);
      } catch (err) {
        console.error('Failed to retrieve users:', err);
        res.status(500).send({message: "Something Went Wrong!! Failed to retrieve data"});
      }
})


app.get('/subscribers/:id', async (req, res) => {
    try {
        // Use Mongoose model to query the database
        const userId = req.params.id
        const resultByID = await subscribers.findById(userId);
        // verifying if data with given exists.
        if(resultByID) {
            res.status(200).json(resultByID)
        }else{
            res.status(404).json({message: "No matching data with given id"})
        }
        
      } catch (err) {
        console.error('Failed to retrieve users:', err);
        res.status(500).json({message: "Something Went Wrong!! Failed to retrieve data"});
      }
})

//response for incorrect routes
app.get('*', (req,res)=>{
    res.status(404).json({error: "404! Not Found"})
})


module.exports = app;
