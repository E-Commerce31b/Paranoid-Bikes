const express = require('express')
const router = express();

const {getCarsApi} = require("../controllers/cars")

router.get("/", getCarsApi)

module.exports = router