const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const transactionRoutes =  require('./routes/transactions');
const cors = require('cors');


const app = express();


//Middleware
app.use(bodyParser.json());
app.use(express.static('public')); //serves HTML/CSS/JS files
app.use(cors());

//MongoDB Connection
mongoose.connect('mongodb+srv://priyanshutyagi1109:S9tDBSK1yezEo2Dj@cluster0.vss8l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',{
    useNewUrlparser: true,
    useUnifiedTopology: true })
        .then(()=>
    console.log('MongoDB connected'))
        .catch(err =>
    console.log(err));

//Routes
app.use('/transactions', transactionRoutes);

//starting server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
console.log(`Server running on port ${PORT}`));