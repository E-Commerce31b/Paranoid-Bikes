const express = require('express')
const router = express();

const {getBikesApi} = require("../controllers/bikes")

router.get("/", async(req,res) => {
    apiBikes = getBikesApi
} )

module.exports = router