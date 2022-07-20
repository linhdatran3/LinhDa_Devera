const express = require('express');
const app = express()
const port = 8080;
const userRouter = require('./users/routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/v1/users', userRouter);

// app.use('v1/classes', classRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});