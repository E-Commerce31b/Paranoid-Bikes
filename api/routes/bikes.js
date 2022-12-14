const express = require('express')
const router = express();

const {getBikesApi, getBikesDb, bikesToDb} = require("../controllers/bikes");
const { bikeModel } = require('../models');

router.get("/", async(req, res) => {
    // console.log('entre a get')
    const { name } = req.query;
    // console.log(name)
    try {
        let total = await getBikesDb()
        if(name) {
            let found = total.filter(
                f => f?.name?.toLowerCase().includes(name?.toLowerCase())
            )
            // console.log(found)
            found.length ?
            res.status(200).send(found) :
            res.status(404).send('Bike not found...')
        } else {
            res.status(200).send(total.flat())//
        }
    } catch(err) {
        console.log(err)
    }
} )

router.get("/:id", async(req, res) => {
    const { id } = req.params
    try {
        const data = await bikeModel.findById(id)
        res.status(200).send(data)
    } catch (err) {
        console.log(err)
    }
})

module.exports = router