const express = require('express');
const router = express.Router();

router.get('/:id', (req, res) =>{
    res.status(200).json({id:req.params.id, name : 'Chathura'})
});

module.exports = router;