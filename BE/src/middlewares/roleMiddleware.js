// // middlewares/roleMiddleware.js
// module.exports = (role) => {
//     return (req, res, next) => {
//       if (req.user.role !== role) {
//         return res.status(403).json({ message: 'Access denied: role not authorized' });
//       }
//       next();
//     };
//   };

// middlewares/roleMiddleware.js
const roles = (...roles) => {
  return (req, res, next) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({ message: 'Access denied: role not authorized' });
    }
    next();
  };
};

export default roles;

  