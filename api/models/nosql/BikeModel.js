const mongoose = require('mongoose')
const { Schema } = require('mongoose')
// const mongooseDelete = require('mongoose-delete')
const BikeScheme = new mongoose.Schema(
  {
    id : {
      type : mongoose.Types.ObjectId,
      },
    name : {
      type : String
    },
    maker: {
      type: String
    },
    image: {
      type: String,
      default: "https://www.santafixie.com/blog/wp-content/uploads/2020/09/niss-bike-9_1427885375_1427885381-920x470.jpg"
    },
    year: {
      type: Number
    },
    category: {
      type: String,
      enum: ["mountain", "road", "urban", "bmx", "youth"],
      default: "urban"
    },
    isEBike: {
      type: Boolean,
      default: false
    },
    gender: {
      type: String,
      enum: ["unisex", "womens", "boys", "girls"],
      default:"unisex"
    },
    count: {
      type: Number,
      default: 0
    },
    priceCurrency: {
      type: String,
      enum: ["USD", "AUD", "CAD", "EUR", "GBP", "NZD"],
      default: "USD"
    },
    stock: {
      type: Number,
      default: 5
    },
    priceAmount: {
        type: Number,
        default: 0
    },
    softDelete: {
      type: Boolean,
      default: false
    }
  }
)

module.exports = mongoose.model("Bike", BikeScheme)