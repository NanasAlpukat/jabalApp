// import { validationResult } from 'express-validator';

// export default (req, res, next) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     const messages = errors.array().map(err => err.msg);
//     return res.status(400).json({ errors: messages });
//   }
//   next();
// };
// middleware/handleValidationErrors.js
import { validationResult } from 'express-validator';

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const formattedErrors = {};
    errors.array().forEach(error => {
      const key = error.path;  // Ganti dari error.param ke error.path
      if (!formattedErrors[key]) {
        formattedErrors[key] = [];
      }
      formattedErrors[key].push(error.msg);
    });

    return res.status(422).json({ errors: formattedErrors });
  }

  next();
};


export default handleValidationErrors;


