const {bikeModel } = require("../models");
const axios = require('axios')


const APY_TOKEN = process.env.APY_TOKEN

const getBikesApi = async ()=>{
    try {
        const allBikes = await axios.get("https://api.99spokes.com/v1/bikes?include=thumbnailUrl&limit=150", {headers: { "Accept-Encoding": "gzip,deflate,compress",
        "Authorization": APY_TOKEN
      }} )
        const bikes = allBikes?.data?.items?.map(b => {
          return {
            name: b.model,
            image: b.thumbnailUrl,
            year: b.year,
            category: b.category,
            isEBike: b.isEbike
          }
        })
        return bikes
        } catch(err) {
          console.log(err)
          
    }
    
}

const bikesToDb = async() => {
  try {
    const bikes = await getBikesApi()
    console.log(bikes.length)
    await bikeModel.insertMany(bikes)
    res.send(bikes)
    
    // console.log("despues del if",bikes)
  } catch(err) {

    res.send(err)
    console.log(err)
  }
  }





module.exports = {getBikesApi, bikesToDb}