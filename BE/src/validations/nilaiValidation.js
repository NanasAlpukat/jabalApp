import { body } from 'express-validator';

const singleValidator = [
  body('studentId')
    .notEmpty().withMessage('studentId wajib diisi')
    .isUUID().withMessage('studentId harus berupa UUID'),
  body('mapelId')
    .notEmpty().withMessage('mapelId wajib diisi')
    .isUUID().withMessage('mapelId harus berupa UUID'),
  body('nilai')
    .notEmpty().withMessage('nilai wajib diisi')
    .isInt({ min: 0, max: 100 }).withMessage('nilai harus berupa angka antara 0-100'),
  body('upsensi')
    .notEmpty().withMessage('upsensi wajib diisi')
    .isInt({ min: 0, max: 100 }).withMessage('upsensi harus berupa angka antara 0-100'),
];

const arrayValidator = [
  body()
    .isArray().withMessage('Data harus berupa array'),
  body('*.studentId')
    .notEmpty().withMessage('studentId wajib diisi')
    .isUUID().withMessage('studentId harus berupa UUID'),
  body('*.mapelId')
    .notEmpty().withMessage('mapelId wajib diisi')
    .isUUID().withMessage('mapelId harus berupa UUID'),
  body('*.nilai')
    .notEmpty().withMessage('nilai wajib diisi')
    .isInt({ min: 0, max: 100 }).withMessage('nilai harus berupa angka antara 0-100'),
  body('*.upsensi')
    .notEmpty().withMessage('upsensi wajib diisi')
    .isInt({ min: 0, max: 100 }).withMessage('upsensi harus berupa angka antara 0-100'),
];

// Middleware untuk memilih validator sesuai tipe input
export const nilaiValidator = async (req, res, next) => {
  const isArray = Array.isArray(req.body);
  const validator = isArray ? arrayValidator : singleValidator;

  try {
    for (const validate of validator) {
      await validate.run(req);
    }
    next();
  } catch (error) {
    next(error);
  }
};
