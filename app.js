require("dotenv").config();
const Express = require("express");
const app = Express();
const bodyParser = require("body-parser");
// conectamos app a la base de datos
const mongoose = require("mongoose");

const SERVER_PORT = process.env.SERVER_PORT || 5000;
const DB_PORT = process.env.DB_PORT || 27017;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/recipes", require("./routes/recipe"));
mongoose
    .connect(`mongodb://localhost:${DB_PORT}/app`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("base de datos conectada"))
    .catch(err => {
        throw err;
    });

app.use((req, res) => res.status(404).json({ message: "route not found" }));

app.listen(SERVER_PORT, () => {
    console.log(`Server listening on port ${SERVER_PORT}`);
});
