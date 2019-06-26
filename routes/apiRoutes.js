const router = require('express').Router();
const db = require('../models');
const seeds = require('../charSeeds.json');

router.route('/characters')
    .get((req,res,err) => {
        res.json(seeds);
    })
router.route('/character')
    .post((req,res,err) => {
        res.json("");
    })
router.route('/character/:id')
    .get((req,res,err) => {
          res.json(seeds[0]);
    })
    .put((req,res,err) => {
        res.json("");
    })
    .delete((req,res,err) => {
        res.json("");
    })

router.route('/characters/mine')
    .get((req,res,err) => {
        res.json(seeds);
    })

module.exports = router;