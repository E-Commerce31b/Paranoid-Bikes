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
      default: 'https://www.santafixie.com/blog/wp-content/uploads/2020/09/niss-bike-9_1427885375_1427885381.jpg'
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