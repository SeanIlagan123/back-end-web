// Importing and executing Express
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
//Import Routes
const authRoute = require('./routes/auth');

dotenv.config();

// Database Connection
mongoose.connect(process.env.DB_CONNECTION,
{useNewUrlParser: true, useUnifiedTopology: true},
() => console.log('Connected to Database')
)

//Middleware
app.use(cors());
app.use(express.json());

//Route Middlewares
app.use('/api/user', authRoute);

// Prevents errors when running and closing multiple times.
process.on("uncaughtException", () => server.close());
process.on("SIGTERM", () => server.close());

const port = 5000;

app.listen(port, () => console.log(`Running on port ${port}`));