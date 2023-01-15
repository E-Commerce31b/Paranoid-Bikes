const express = require('express');
const router = express();
const {getBikesApi, getBikesDb, bikesToDb} = require("../controllers/bikes");
const { bikeModel } = require('../models');
// 
router.get("/", async(req, res) => {
    // console.log('entre a get')
    const { name } = req.query;
    // console.log(name)
    try {
        const bikes = await getBikesDb()
        const total = bikes.filter(e => e.softDelete !== true)
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
        console.log('error en get bicis')
        console.log(err)
        console.log('error en get bicis')
        res.status(404).send("not found D:")
    }
} )

router.get("/:id", async(req, res) => {
    const { id } = req.params
    try {
        const data = await bikeModel.findById(id)
        if(data.softDelete === true) {
            res.status(404).send('not found D:')
        } else {
            res.status(200).send(data)
        }
    } catch (err) {
        console.log('error en get bicis por id')
        console.log(err)
        console.log('error en get bicis por id')
        res.status(404).send("not found D:")
    }
})

router.put('/:id', async(req, res) => {
    const { id } = req.params
    try {
        const { ...body } = req.body;
        const data = await bikeModel.findByIdAndUpdate(id, body)
        res.status(200).send(data)
    } catch (err) {
        console.log('error en put bicis')
        console.log(err)
        console.log('error en put bicis')
        res.status(400).send("cant't modify")
    }
})

router.post("/", async(req, res) => {
    try {
        console.log(req.body)
        const {
            name,
            maker,
            image,
            year,
            category,
            isEBike,
            gender,
            priceCurrency,
            priceAmount
        } = req.body;

        // console.log(
        //     name,
        //     maker,
        //     image,
        //     year,
        //     category,
        //     isEBike,
        //     gender,
        //     priceCurrency,
        //     priceAmount
        // )
        const createdBike = await bikeModel.create({
            name,
            maker,
            image,
            year,
            category,
            isEBike,
            gender,
            priceCurrency: priceCurrency,
            priceAmount: priceAmount
        })

        res.status(200).send(createdBike)
    } catch (err) {
        console.log('error en post bicis')
        console.log(err)
        console.log('error en post bicis')
        res.status(404).send("can't post D:")
    }
})

router.delete('/:id', async(req, res) => {
    const { id } = req.params;
    try {
        const data = await bikeModel.findByIdAndDelete(id)
        res.status(200).send(data)
    } catch (err) {
        console.log('error en delete bikes')
        console.log(err)
        console.log('error en delete bikes')
        res.status(400).send("Can't delete")
    }
})

module.exports = router