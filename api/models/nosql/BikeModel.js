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
    priceCurrency: {
      type: [String],
      enum: ["USD", "AUD", "CAD", "EUR", "GBP", "NZD"],
      default: ["USD"]
    },
    priceAmount: {
        type: [Number],
        default: [0]
    }
  }
)

module.exports = mongoose.model("Bike", BikeScheme)