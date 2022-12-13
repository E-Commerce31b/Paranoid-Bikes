const {bikeModel } = require("../models");
const axios = require('axios')


const getBikesApi = async (req, res)=>{
    try {
        console.log('entre al ge')
        const cars = await axios.get("https://fakestoreapi.com/products", {headers: { "Accept-Encoding": "gzip,deflate,compress" }} )
        console.log(cars)
        res.send(cars.data)


    
    } catch(err) {
      console.log(err)
    }
    
}

module.exports = {getBikesApi}