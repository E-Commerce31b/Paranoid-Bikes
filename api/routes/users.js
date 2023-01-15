const express = require('express');
const {userModel} = require('../models/index')
const router = express();
const jwt = require('jsonwebtoken')
const authenticateToken = require('../validators/tokenValidator')
// const { getUsersValidator } = require('../validators/bikeValidator')
// 

router.get('/', async(req, res) => {
    const {first_name, last_name} = req.query
    try {
        const AllUsers = await userModel.find({})
        const users = AllUsers.filter(e => e.softDelete !== true)
        if(last_name || first_name) {
            let found = []
            last_name ? 
            found = users.filter(u => u?.last_name?.toLowerCase().includes(last_name?.toLowerCase())) :
            found = users.filter(u => u?.first_name?.toLowerCase().includes(first_name?.toLowerCase()))
            console.log(found)
            res.status(200).send(found)
        } else {
            res.status(200).send(AllUsers)
        }

    } catch (err) {
        console.log('error en get usuario')
        console.log(err)
        console.log('error en get usuario')
        res.status(404).send("not found D:")
    }
})

router.get('/:id', async(req, res) => {
    const { id } = req.params;
    try {
        const data = await userModel.findById(id)
        if(data.softDelete === true) {
            res.status(404).send('user not found D:')
        } else {
            res.status(200).send(data)
        }
        
    } catch (err) {
        console.log('error en get user id')
        console.log(err)
        console.log('error en get user id')
        res.status(404).send("not found D:")
    }

})

router.put('/:id', async(req, res) => {
    const { id } = req.params;
    try {
        const { ...body } = req.body
        const data = await userModel.findByIdAndUpdate(id, body)
        res.status(200).send(data)
    } catch (err) {
        console.log('error en put users')
        console.log(err)
        console.log('error en put users')
        res.status(400).send("cant't modify")
    }
})

router.post('/', async(req, res) => {
    try {
        const {
            first_name,
            password,
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
        const createdUser = userModel.create({
            first_name,
            password,
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
        res.status(200).send("Usuario Creado")
    } catch (err) {
        console.log('error en post user')
        console.log(err)
        console.log('error en post user')
        res.status(404).send("can't post D:")
    }
})

router.post("/login", (req, res) => {
    const { email, password } = req.body;
    userModel.findOne({ email: email }, (err, user) => {
      if (err) {
        res.status(500).send("Error al autenticar al usuario");
      }
      if (!user) {
        res.status(500).send("El usuario no existe");
      } else {
        user.isCorrectPassword(password, (err, result) => {
          if (err) {
            res.status(500).send("Error al autenticar");
          } else if (result) {
            const accessToken = jwt.sign(email, process.env.ACCESS_TOKEN_SECRET)
            res.status(200).send({accessToken: accessToken});
          } else {
            res.status(500).send("Usuario o contranseña incorrecta");
          }
        });
      }
    });
  });
  
router.delete('/:id', async(req, res) => {
    const { id } = req.params;
    try {
        const data = await userModel.findByIdAndDelete(id)
        res.status(200).send(data)
    } catch (err) {
        console.log('error en delete users')
        console.log(err)
        console.log('error en delete users')
        res.status(400).send("Can't delete")
    }
})

module.exports = router