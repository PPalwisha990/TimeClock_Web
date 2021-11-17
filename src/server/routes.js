var express = require("express");
let database = require("../db/database");

const router = express.Router();

/* GET home page. */
router.get("/", (req, res) => res.send("Hello World"));
router.post("/createTables", function (req, res) {
  console.log("Request====", req.body);
  database.onRefresh().then((result) => {
    console.log("Result ", result);
  });
});

router.get("/getTest", (req, res) => res.send("This is test data"));
module.exports = router;
