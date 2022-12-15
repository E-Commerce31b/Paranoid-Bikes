const mongoose = require('mongoose')
const { Schema } = require('mongoose')
// const mongooseDelete = require('mongoose-delete')
const UserScheme = new mongoose.Schema(
  {
    id : {
      type : mongoose.Types.ObjectId,
      },
    first_name : {
      type : String
    },
    last_name: {
      type: String
    },
    history: {
        type: Array
    },
    type: {
      type: String,
    },
    purchased: {
      type: Array
    },
    email: {
      type: String,
    },
    country: {
      type: String,
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    address: {
        type: String
    },
    birthday: {
        type: String
    },
    DNI: {
        type: Number
    }
  }
)

module.exports = mongoose.model("User", UserScheme)