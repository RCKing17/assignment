const express = require('express');
const router = express.Router();
const groupController = require('../controllers/groupController');

// Get all groups
router.get('/', groupController.getAllGroups);

// Create a new group
router.post('/', groupController.createGroup);

// Update a group
router.put('/:id', groupController.updateGroup);

// Delete a group
router.delete('/:id', groupController.deleteGroup);

module.exports = router;
