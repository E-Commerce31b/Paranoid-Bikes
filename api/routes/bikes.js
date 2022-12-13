const express = require('express')
const router = express();

const {getBikesApi} = require("../controllers/bikes")

router.get("/", getBikesApi)

module.exports = router