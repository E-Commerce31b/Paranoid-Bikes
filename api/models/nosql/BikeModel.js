const mongoose = require('mongoose')
const { Schema } = require('mongoose')
// const mongooseDelete = require('mongoose-delete')
const BikeScheme = new mongoose.Schema(
  {
    id : {
      type : String,
      },
    name : {
      type : String
    },
    makerId : {
      type : String
    },
    maker: {
      type: String
    },
    image: {
      type: String
    },
    year: {
      type: Number
    },
    model: {
      type: String
    },
    category: {
      type: String
    },
    isEBike: {
      type: Boolean,
      default: false
    },
  }
)

module.exports = mongoose.model("Bike", BikeScheme)