const express = require("express");
// helper modules
const { quotes } = require("../data");
const { getRandomElement } = require("../utils");
const e = require("express");
const quoteRouter = express.Router();
// GET
quoteRouter.get("/", (req, res, next) => {
    if (req.query.person) {
        let query = quotes.filter((e) => e.person === req.query.person);
        if (query.length > 0) {
            res.send({ quotes: query });
        }else{
            res.send({quotes:[]})}
        res.send({ quotes });
    }
});
quoteRouter.get("/random", (req, res, next) => {
    res.send({ quote: getRandomElement(quotes) });
});
// POST
quoteRouter.post("/", (req, res, next) => {
    if (!req.query.person || !req.query.quote) {
        res.status(400).send();
    }
    let newQuote = { person: req.query.person, quote: req.query.quote };
    quotes.push(newQuote);
    res.send({quote:newQuote})
});
module.exports = { quoteRouter };
