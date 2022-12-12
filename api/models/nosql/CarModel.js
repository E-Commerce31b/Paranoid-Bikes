const mongoose = require('mongoose')
const { Schema } = require('mongoose')
// const mongooseDelete = require('mongoose-delete')
const CarScheme = new mongoose.Schema(
  {
    id : {
      type : Number,
      },
      name : {
        type : String
      },
      make_id : {
        type : Number
      }   
  }
)
// CarScheme.plugin(mongooseDelete, { overrideMethods: 'all' })
module.exports = mongoose.model("Car", CarScheme)