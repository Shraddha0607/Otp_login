const mongoose = require('mongoose');

const mongoDb = async () => {
    const URI = process.env.DB_URL;

    await mongoose.connect(URI);
    console.log("Db connection done.");
}

module.exports = mongoDb;