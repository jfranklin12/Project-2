const router = require("express").Router();

router.get("/", async (req, res) => {

    try {
        res.render("homepage");
    } catch (err) {
        res.status(500).json(err);
    }

});

router.get("/login", async (req, res) => {

    try {
        res.render("login");
    } catch (err) {
        res.status(500).json(err);
    }

});

router.get("/review", async (req, res) => {

    try {
        res.render("review");
    } catch (err) {
        res.status(500).json(err);
    }

});

router.get("/degree", async (req, res) => {

    try {
        res.render("degree");
    } catch (err) {
        res.status(500).json(err);
    }

});

module.exports = router;