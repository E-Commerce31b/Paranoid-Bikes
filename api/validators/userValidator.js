const {check} = require('express-validator')
const { userModel } = require('../models')
const validateResults = require('../utils/handleValidator');

const createUserValidator = [
   check('email')
      .exists()
      .notEmpty()
      .isLength({ min: 6, max: 50})
      .custom(async (value) => {
         const user = await userModel.findOne({ email: value });
         if (user) {
           throw new Error('El email ya está en uso');
         }
         return true;
      }),
   check('password')
      .exists()
      .notEmpty()
      .isLength({ min: 8, max: 50 }),
   check('first_name')
      .exists()
      .notEmpty()
      .isLength({ min: 4, max: 50 }),
   check('last_name')
      .exists()
      .notEmpty()
      .isLength({ min: 4, max: 50 }),
   check('history')
      .optional(),
   check('type')
      .optional(),
   check('purchased')
      .optional(),
   check('country')
      .exists()
      .notEmpty(),
   check('city')
      .exists()
      .notEmpty(),
   check('state')
      .exists()
      .notEmpty(),
   check('address')
      .exists()
      .notEmpty(),
   check('birthday')
      .exists()
      .notEmpty(),
   check('DNI')
      .exists()
      .notEmpty(),
   check('softDelete')
      .optional(),
   (req, res, next) => {
      return validateResults(req, res, next)
   }
]

const getUsersValidator = [
   check('email')
      .custom(async(value) => {
         console.log(value)
      }),
   (req, res, next) => {
      return validateResults(req, res, next)
   }
]

module.exports = {
   createUserValidator, getUsersValidator,
}