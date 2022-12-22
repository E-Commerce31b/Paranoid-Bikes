const { bikeModel } = require("../models");
const axios = require('axios')
const backup = require("../utils/backup")


 
const getBikesApi = async ()=>{
    try {
        const allBikes = await axios.get("https://api.99spokes.com/v1/bikes?include=thumbnailUrl,prices&limit=150", {headers: { "Accept-Encoding": "gzip,deflate,compress",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50TmFtZSI6InNlYmFzdGlhbmFndWlhciIsInZlcnNpb24iOjEsImlhdCI6MTY3MDg3NDExNn0.wc8J_dYxAP9s7GBrcIf1dN6CVPMP-TrqEu5TD9JTUWY"
      }} )
        const bikes = allBikes?.data?.items?.map(b => {
          return {
            name: b.model,
            image: b.thumbnailUrl,
            year: b.year,
            category: b.category,
            isEBike: b.isEbike,
            maker: b.maker,
            gender: b.gender,
            priceCurrency: b.prices?.map(p => p.currency)[0],
            priceAmount: b.prices?.map(p => p.amount)[0],
            softDeleted: b.softDeleted
          }
        })
        return bikes
        } catch(err) {
          console.log("catch getBikesApi")
          console.log(err)
          console.log("catch getBikesApi")
    }
    
}

const getBikesDb = async () => {
  try {
    const db = await bikeModel.find({})
    return db
  } catch (err) {
      console.log("catch getBikesDb")
      console.log(err)
      console.log("catch getBikesDb")
  }
} 

const bikesToDb = async() => {
  try {
    const allBikes = await bikeModel.find({})
    // console.log("antes del if",allBikes.length)
    if(allBikes.length === 0) {
      const bikes = await getBikesApi()
      const allBikes = bikes.concat(backup)
      // console.log(bikes)
      await bikeModel.insertMany(allBikes)
    } 

    // allBikes = await bikeModel.find({})
    // console.log("despues del if",allBikes.length)
    return allBikes
    // console.log("despues del if",bikes)
  } catch(err) {
    console.log('entre a catch bikesToDb')
    console.log(err)
    console.log('entre a catch bikesToDb')//
  }
}





module.exports = {
  getBikesApi, 
  bikesToDb, 
  getBikesDb
}