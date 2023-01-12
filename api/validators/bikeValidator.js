const { check } = require('express-validator')
const { bikeModel } = require('../models')
const validateResults = require('../utils/handleValidator');

const createBikeValidator = [
   check('name')
      .exists()
      .notEmpty()
      .isLength({ min: 8, max: 50 })
      .custom(async (value) => {
         const bike = await bikeModel.findOne({ name: value });
         if (bike) {
           throw new Error('La bici ya existe');
         }
         return true;
       }),
   check('maker')
      .exists()
      .notEmpty()
      .isLength({ min: 8, max: 50 }),
   check('year')
      .exists()
      .notEmpty(),
   check('image')
      .optional(),
   check('category')
      .optional(),
   check('isEBike')
      .optional(),
   check('gender')
      .optional(),
   check('count')
      .optional(),
   check('priceCurrency')
      .optional(),
   check('priceAmount')
      .optional(),
   check('softDelete')
      .optional(),
   (req, res, next) => {
      return validateResults(req, res, next)
   }
]

module.exports = {
   createBikeValidator,
}