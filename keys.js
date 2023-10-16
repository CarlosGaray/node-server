require("dotenv").config();

module.exports = {
    MONGOURICLOUD:  process.env.MONGO_URI_CLOUD,
    MONGOURILOCAL: process.env.MONGO_URI_LOCAL,
    JWT_SECRET: process.env.JWT_SECRET
}