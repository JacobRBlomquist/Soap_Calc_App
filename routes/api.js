const express = require('express');
const router = express.Router();
const busboy = require('busboy')

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
    const bb = new busboy({ headers: req.headers })//morioh.co/p/5928cff805ba

    bb.on('field', function (fieldname, val, valTruncated, keyTruncated) {//parse form data
        if (req.body.hasOwnProperty(fieldname)) {
            if (Array.isArray(req.body[fieldname])) {
                req.body[fieldname].push(val);
            } else {
                req.body[fieldname] = [req.body[fieldname], val];
            }
        } else {
            req.body[fieldname] = val;
            console.log(req.body)
        }
    });

    bb.on('finish', function () {


        res.status(200).json({
            "status": "Received!",
            "b": req.body
        })
    })
    return req.pipe(bb);
});

module.exports = router;