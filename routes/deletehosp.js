import express from 'express';
const router = express.Router();
import Deletehosp from '../controllers/deletehosp'
const deletehosp = new Deletehosp();


router.post('/', deletehosp.deletehosp);
// router.get('/:id', deletehosp.getDataById);
// router.put('/:id', deletehosp.updateById);
// router.delete('/:id', deletehosp.deleteById);


module.exports = router;