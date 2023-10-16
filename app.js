const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require('cors');
const PORT = 5000;
const { MONGOURILOCAL } = require("./keys");

require("./models/user");
require("./models/post");

app.use(cors({ origin: 'http://localhost:4200' }));

app.use(express.json());
app.use(require("./routes/auth"));
app.use(require("./routes/post"));

mongoose.connect(MONGOURILOCAL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on("connected", () => {
    console.log("Connected to mongo yeahh");
});

mongoose.connection.on("error", (err) => {
    console.log("Err connecting", err);
});

app.listen(PORT, () => {
    console.log("Server is running on", PORT);
});