import { body } from 'express-validator';
import { prisma } from '../config/prisma.js';

export const registerValidation = [
  body('name')
    .isLength({ min: 2 })
    .withMessage('Name must be at least 2 characters long'),

  body('email')
    .isEmail()
    .withMessage('Email is not valid')
    .custom(async (email) => {
      const user = await prisma.user.findUnique({ where: { email } });
      if (user) throw new Error('Email already in use');
      return true;
    }),

  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters'),

  body('role')
    .isIn(['admin', 'teacher', 'student'])
    .withMessage('Role must be admin, teacher, or student'),
];

export const loginValidation = [
  body('email')
    .isEmail()
    .withMessage('Email must be valid'),

  body('password')
    .notEmpty()
    .withMessage('Password is required'),
];

export const resetPasswordValidation = [
  body('token')
    .notEmpty()
    .withMessage('Token is required'),

  body('password')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters long'),
];

export const forgotPasswordValidation = [
  body('email')
    .isEmail()
    .withMessage('Invalid email address'),
];
