const express = require('express');
const router = express.Router();
const {
  reqisterUser,
  loginUser,
  getMe,
} = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

router.post('/', reqisterUser);
router.post('/login', loginUser);
router.get('/me', protect, getMe);

module.exports = router;
