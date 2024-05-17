const express = require('express');
const router = require('./routes/auth')

const app = express();

app.use(express.json())

app.use('/auth', router)

app.listen(8080, () => {
    console.log("Server is running. Don't be afraid duffer")
})