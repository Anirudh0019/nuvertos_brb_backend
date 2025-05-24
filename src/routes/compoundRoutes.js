const express = require('express');
const router = express.Router();
const { getAllCompounds, getCompoundById,updateCompound } = require('../controllers/compoundController');
const auth = require('../middleware/authMiddleware');


router.get('/', getAllCompounds);
router.get('/:id', getCompoundById);
router.put('/:id', auth, updateCompound); 

module.exports = router;
