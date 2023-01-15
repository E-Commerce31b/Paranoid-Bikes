const mongoose = require('mongoose')
const { Schema } = require('mongoose')
// const mongooseDelete = require('mongoose-delete')
const AdminScheme = new mongoose.Schema(
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
      type: {
        type: String,
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
      },
      password: {
        type: String
      },
      softDelete: {
        type: Boolean,
        default: false
      },
      admin: {
         type: Boolean,
         default: false
      },
      superAdmin: {
         type: Boolean,
         default: false
      }
   }
)

module.exports = mongoose.model("Admin", AdminScheme)