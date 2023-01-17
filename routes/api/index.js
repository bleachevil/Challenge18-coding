const router = require('express').Router();
const thoughtRoutes = require('./thoughtRoutes');
const userRoutes = require('./userRouters');

router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes);

module.exports = router;
