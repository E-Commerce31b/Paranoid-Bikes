const express = require('express');
const {userModel} = require('../models/index')
const router = express();


router.get('/', async(req, res) => {
    const {first_name, last_name} = req.query
    try {
        const AllUsers = await userModel.find({})
        if(last_name || first_name) {
            let found = []
            last_name ? 
            found = AllUsers.filter(u => u?.last_name?.toLowerCase().includes(last_name?.toLowerCase())) :
            found = AllUsers.filter(u => u?.first_name?.toLowerCase().includes(first_name?.toLowerCase()))
            console.log(found)
            res.status(200).send(found)
        } else {
            res.status(200).send(AllUsers)
        }

    } catch (err) {
        console.log('error en get usuario')
        console.log(err)
        console.log('error en get usuario')
    }
})

router.post('/', async(req, res) => {
    try {
        const {
            first_name,
            last_name,
            history,
            type,
            purchased,
            email,
            country,
            city,
            state,
            address,
            birthday,
            DNI
        } = req.body

        // console.log(
        //     first_name,
        //     last_name,
        //     history,
        //     type,
        //     purchased,
        //     email,
        //     country,
        //     city,
        //     state,
        //     address,
        //     birthday,
        //     DNI
        // )

        const createdUser = userModel.create({
            first_name,
            last_name,
            history,
            type,
            purchased,
            email,
            country,
            city,
            state,
            address,
            birthday,
            DNI
        })
        res.status(200).send(createdUser)
    } catch (err) {
        console.log('error en post user')
        console.log(err)
        console.log('error en post user')
    }
})

module.exports = router