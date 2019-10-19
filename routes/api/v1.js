const express = require('express');
const router = express.Router();
const mainApiController = require('../../app/controller/mainApiController');
// const mainApiController = require('@app/controller/mainApiController');

router.get('/', (req, res) => {
    res.json({ firstName: 'Tobi' });
})

router.get('/posts', mainApiController.posts);
/**
 * router for product
 */

 router.get('/products', mainApiController.getProducts);
module.exports = router;