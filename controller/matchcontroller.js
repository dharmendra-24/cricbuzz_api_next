const router = require('express').Router();
const { json } = require('express');
const matchmodel = require('../model/matchmodel');
router.post('/', async function (req, res) {
    try {
        const matchdata = req.body;
        const newmatch = matchmodel(matchdata);
        console.log(newmatch);
        newmatch.save();
        return res.json({ data: newmatch });

    } catch (e) {
        console.log(e);
    }
})


router.get('/', async function (req, res) {
    try {
        const match = await matchmodel.find();
        res.json({
            success: true, data: match
        });
    } catch (e) {
        console.log(e);
    }
});
module.exports = router;