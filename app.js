const express = require("express")();
const cors = require("cors");
const bodyParser = require("body-parser");

express.use(cors());
express.use(bodyParser.urlencoded({ extended: true }));
express.use(bodyParser.json());

express.post("/tweets", (req, res) => {
  const tweets = req.body.tweets;
  res.send(tweets.map(tweet => ({...tweet, language: "asdf"})));
});

express.listen(5000, () =>
  console.log("App listening at http://localhost:5000")
);
