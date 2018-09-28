import express from 'express';
const router = express.Router();
import Addtimeslot from '../controllers/addtimeslot'
const addtimeslot = new Addtimeslot();


router.post('/', addtimeslot.addtimeslot);
// router.get('/', addtimeslot.getDataById);
// router.put('/:id', addtimeslot.updateById);
// router.delete('/:id', addtimeslot.deleteById);



module.exports = router;