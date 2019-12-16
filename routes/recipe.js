const express = require("express");
const router = express.Router();
const Recipe = require("../models/Recipe");
router.get("/getRecipies", async (req, res) => {
    try {
        const recipeDB = await Recipe.find().limit(10);
        console.log(recipeDB);
        res.status(200).json({ recipeDB });
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
});

module.exports = router;
