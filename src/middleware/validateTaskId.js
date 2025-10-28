import { param } from 'express-validator';
import { checkValidationResults } from './handleValidationErrors.js';

export const validateTaskId = [
  param('id')
    .isInt()
    .withMessage('ID must be a number'),

  checkValidationResults,
];