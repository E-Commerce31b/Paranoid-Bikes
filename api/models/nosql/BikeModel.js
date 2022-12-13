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
      type: String
    },
    isEBike: {
      type: Boolean,
      default: false
    },
     }
)

module.exports = mongoose.model("Bike", BikeScheme)