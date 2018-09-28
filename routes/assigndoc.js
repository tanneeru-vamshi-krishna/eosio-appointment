import express from 'express';
const router = express.Router();
import Assigndoc from '../controllers/assigndoc'
const assigndoc = new Assigndoc();


router.post('/', assigndoc.assigndoc);
// router.get('/', assigndoc.getDataById);
// router.put('/:id', assigndoc.updateById);
// router.delete('/:id', assigndoc.deleteById);



module.exports = router;