const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');


// !Password: vGgoxYUNvUZyrFhJ
// !MongoDB: mongodb+srv://imdadulhaque:<password>@cluster0.wkwq3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority


app.use(morgan('dev'));
app.use(express.json({limit:"30mb", extend:true}))
app.use(express.urlencoded({limit:"30mb", extend:true}))
app.use(cors())

const MONGODB_URL = "MongoDB: mongodb+srv://imdadulhaque:vGgoxYUNvUZyrFhJ@cluster0.wkwq3.mongodb.net/tour_db?retryWrites=true&w=majority";


// !-- PORT Define & MongoDB Connection Established
const PORT = process.env.PORT || 5000;
mongoose.connect(MONGODB_URL)
    .then(() =>{
        app.listen(PORT, () =>{
            console.log(`Server is running on port @${PORT}.`)
        })
    })
    .catch((err) =>{
        console.log(`${err} did not connect!`)
    })










