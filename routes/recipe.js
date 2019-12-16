const express = require(express);
const router = express.Router();
const User = require("../models/Recipe");

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
