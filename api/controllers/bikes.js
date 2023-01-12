const { bikeModel } = require("../models");
const axios = require('axios')
const backup = require("../utils/backup")

const changePricesForPut = (priceCurrency, priceAmount) => {
  // console.log(priceCurrency, priceAmount)
  switch(priceCurrency) {
    case 'USD':
      return {
        priceCurrency,
        priceAmount
      };
    case 'AUD':
      priceCurrency = 'USD'
      // console.log(priceAmount)
      priceAmount = Math.round(priceAmount * 0.690)
      // console.log("AUD", priceAmount)
      return {
        priceCurrency,
        priceAmount
      };
    case 'EUR':
      priceCurrency = 'USD'
      priceAmount = Math.round(priceAmount * 1.074);
      // console.log("EUR", priceAmount)
      return {
        priceCurrency,
        priceAmount
      };
    case 'CAD':
      priceCurrency = 'USD'
      priceAmount = Math.round(priceAmount * 0.748);
      // console.log("CAD", priceAmount)
      return {
        priceCurrency,
        priceAmount
      };
    case 'GBP':
      priceCurrency = 'USD'
      priceAmount = Math.round(priceAmount * 1.219);
      // console.log("GBP", priceAmount)
      return {
        priceCurrency,
        priceAmount
      };
    case 'NZD':
      priceCurrency = 'USD'
      priceAmount = Math.round(priceAmount * 0.639) ;
      // console.log("NZD", priceAmount)
      return {
        priceCurrency,
        priceAmount
      };
      default: 
      return {
        priceCurrency,
        priceAmount
      };
  }
}

const changePricesPut = async() => {
  const allBikes = await bikeModel.find({})
  if(allBikes) {
    try {
      allBikes.map( async b => {
        const newBike = await axios.put(`http://localhost:3001/api/bikes/${b._id}`, changePricesForPut(b.priceCurrency, b.priceAmount))
        return newBike
      })
    } catch (error) {
      console.log("catch changePricesPut")
      console.log(err)
      console.log("catch changePricesPut")
    }
  }
  return 0
}


 
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
  getBikesDb,
  changePricesPut
}