import express from 'express';
import {
  login,
  logout,
  forgotPassword,
  resetPassword,
  me,
} from '../controllers/authController.js';
import auth from '../middlewares/authMiddleware.js';
import handleValidationErrors from '../middlewares/validationHandler.js';

import {

  loginValidation,
  resetPasswordValidation,
  forgotPasswordValidation,
} from '../validations/authValidation.js';

const router = express.Router();

router.post('/login', loginValidation, handleValidationErrors, login);
router.post('/logout', auth(), logout);
router.post('/forgot-password', forgotPasswordValidation, handleValidationErrors, forgotPassword);
router.post('/reset-password', resetPasswordValidation, handleValidationErrors, resetPassword);
router.get('/me', auth(), me);



export default router;
