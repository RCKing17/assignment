// const express = require('express');
// const router = express.Router();

// // Placeholder for user management logic
// router.get('/', (req, res) => {
//   // Implementing the user retrieval logic 
//   res.send('User management route');
// });

// module.exports = router;


const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

// Get all users (Super Admin only)
router.get('/', authMiddleware.ensureAuthenticated, authMiddleware.ensureRole('Super Admin'), userController.getAllUsers);

// Create a new user (Super Admin only)
router.post('/', authMiddleware.ensureAuthenticated, authMiddleware.ensureRole('Super Admin'), userController.createUser);

// Update an existing user (Super Admin only)
router.put('/:id', authMiddleware.ensureAuthenticated, authMiddleware.ensureRole('Super Admin'), userController.updateUser);

// Delete a user (Super Admin only)
router.delete('/:id', authMiddleware.ensureAuthenticated, authMiddleware.ensureRole('Super Admin'), userController.deleteUser);

module.exports = router;

