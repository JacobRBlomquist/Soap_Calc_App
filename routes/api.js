const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        "type": "api"
    });
});

router.get('/calc', (req, res, next) => {
    res.status(200).json({
        "status": "Ready"
    });
});

router.post('/calc', (req, res, next) => {
    let bod = req.body;
    console.log(bod);
    res.status(200).json({
        "status": "Received!"
    })
});

module.exports = router;