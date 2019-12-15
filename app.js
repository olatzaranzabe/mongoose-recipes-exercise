require("dotenv").config();
const Express = require("express");
const app = Express();
const bodyParser = require("body-parser");
// conectamos app a la base de datos
const mongoose = require("mongoose");
const SERVER_PORT = process.env.SERVER_PORT || 5000;
const DB_PORT = process.env.DB_PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/models", require("./models/recipe"));
mongoose
    .connect(`mongodb://localhost:${DB_PORT}/app`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log(`Connected to mongo on port ${DB_PORT}`))
    .catch(err => {
        throw err;
    });

app.use((req, res) => res.status(404).json({ message: "route not found" }));

app.listen(SERVER_PORT, () => {
    console.log(`Server listening on pot ${SERVER_PORT}`);
});
