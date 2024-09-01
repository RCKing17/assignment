// Middleware to ensure user is authenticated
exports.ensureAuthenticated = (req, res, next) => {
    if (req.headers.authorization) {
      next();
    } else {
      res.status(401).json({ success: false, message: 'Unauthorized' });
    }
  };
  
  // Middleware to ensure user has the required role
  exports.ensureRole = (role) => {
    return (req, res, next) => {
      const user = req.body.user;
      if (user && user.roles.includes(role)) {
        next();
      } else {
        res.status(403).json({ success: false, message: 'Forbidden: You do not have the necessary permissions' });
      }
    };
  };
  