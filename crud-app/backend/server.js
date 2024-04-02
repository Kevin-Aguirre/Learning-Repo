const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config({ path:'../.env' })

const routes = require('./routes/TaskRoute')

const cors = require('cors')
const app = express()

const PORT = process.env.PORT | 8080

const username = process.env.DB_USER;
const password = process.env.DB_PASS;
const cluster = process.env.DB_CLUSTER;
const dbname = process.env.DB_NAME;

const uri = `mongodb+srv://${username}:${password}@${cluster}/${dbname}?retryWrites=true&w=majority`;
mongoose.connect(uri)
    .then(() => console.log("mongodb connected"))
    .catch((err) => console.log(err))


app.use(routes)
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send("the brave kevin ")
})

app.use('/api', routes)

app.listen(PORT, () => {
    console.log(`Listening at port: ${PORT}`);
})  