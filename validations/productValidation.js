// validations/productValidation.js
const { body, validationResult } = require('express-validator');

const validateProduct = [
  body('name').notEmpty().withMessage('Name is required'),
  body('price').isFloat({ gt: 0 }).withMessage('Price must be a positive number'),
  body('description').notEmpty().withMessage('Description is required'),
  body('image').notEmpty().withMessage('Image URL is required'),
];

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = {
  validateProduct,
  handleValidationErrors,
};
