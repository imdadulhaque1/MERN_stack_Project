const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/userDatabase');


// const contactRoute = require('./api/routes/contacts.js');


app.use(morgan('dev'));
app.use(cors());


// ------------> Routing Starting
// app.use('/api/contacts', contactRoute);
// ------------> Routing Ended

// ------------> Starting MongoDB Database connection & check
const db = mongoose.connection;
db.on('error', (err) =>{
    console.log(err);
})
db.once('open', () =>{
    console.log("Database Connection Established!");
})


app.get("/", (req, res) =>{
    res.send("MERN Projects!")
})


// !-- PORT Define
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>{
    console.log(`Server is running on port @${PORT}.`)
})









