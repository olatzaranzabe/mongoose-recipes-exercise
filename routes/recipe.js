const express = require(express);
const router = express.Router();
const Recipe = require("../models/Recipe");
console.log("hola");
router.get("/getRecipes", async (req, res) => {
    console.log("hiiiiiiii");

    try {
        console.log("try");

        res.status(200).json({ message: "todo ok" });
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
});

module.exports = router;
