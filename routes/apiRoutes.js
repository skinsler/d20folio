const router = require('express').Router();
const db = require('../models');
const seeds = require('../charSeeds.json');

router.route('/characters')
    .get((req,res,err) => {
        // res.json(seeds);
        db.Character.find({})
            .sort({_id: -1})
            .then(characters => {console.log ("Got characters: ", characters); return characters})
            .then(characters => res.json(characters))
            .catch(err => res.json(500, err))
    })
router.route('/character')
    .post((req,res,err) => {
        // res.json("");
        const newChar = req.body;

        db.Character.create(newChar)
            .then(character => res.json(character))
            .catch(err => res.json(500, error))
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