const express = require("express");
const app = express();
const db = require('./db')
const jobsRoute = require('./routes/jobsRoute')

app.use('/api/jobs', jobsRoute)


const port = process.env.PORT || 5000;
app.listen(port,() => console.log('Node JS Server Started'));