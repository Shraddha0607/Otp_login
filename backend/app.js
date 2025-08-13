require("dotenv").config();

const express = require('express');
const mongoDb = require("./src/config/db");
const authRouter = require("./src/routes/authRoutes");
const otpRouter = require("./src/routes/otpRoutes");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/test', async (req, res) => {
    res.send("good job, lge rho");
});
app.use('/', authRouter);
app.use('/', otpRouter);

// start the server
mongoDb()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch( error => {
        console.error("Some error occured");
    });