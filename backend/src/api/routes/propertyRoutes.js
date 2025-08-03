const express = require('express');
const router = express.Router();
const propertyController = require('../controllers/propertyController');
const { authenticate, authorize } = require('../middlewares/authMiddleware');
const { validateRequest } = require('../middlewares/validationMiddleware');
const { createPropertySchema, updatePropertySchema } = require('../validators/propertyValidators');

/**
 * @route GET /api/properties
 * @desc Get all properties
 * @access Public
 */
router.get('/', propertyController.getAllProperties);

/**
 * @route GET /api/properties/:id
 * @desc Get property by ID
 * @access Public
 */
router.get('/:id', propertyController.getPropertyById);

/**
 * @route POST /api/properties
 * @desc Create property
 * @access Private (Admin only)
 */
router.post(
  '/',
  authenticate,
  authorize(['admin']),
  validateRequest(createPropertySchema),
  propertyController.createProperty
);

/**
 * @route PUT /api/properties/:id
 * @desc Update property
 * @access Private (Admin only)
 */
router.put(
  '/:id',
  authenticate,
  authorize(['admin']),
  validateRequest(updatePropertySchema),
  propertyController.updateProperty
);

/**
 * @route DELETE /api/properties/:id
 * @desc Delete property
 * @access Private (Admin only)
 */
router.delete(
  '/:id',
  authenticate,
  authorize(['admin']),
  propertyController.deleteProperty
);

/**
 * @route GET /api/properties/:id/valuation-history
 * @desc Get property valuation history
 * @access Public
 */
router.get('/:id/valuation-history', propertyController.getPropertyValuationHistory);

module.exports = router;
