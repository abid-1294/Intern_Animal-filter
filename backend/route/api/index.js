const express = require("express");
const router = express.Router();
const categoryRoute = require ('./category')


router.use('/category', categoryRoute)

module.exports = router;