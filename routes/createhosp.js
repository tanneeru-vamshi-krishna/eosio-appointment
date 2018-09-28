import express from 'express';
const router = express.Router();
import Createhosp from '../controllers/createhosp'
const createhosp = new Createhosp();


router.post('/', createhosp.createhosp);
// router.get('/:id', createhosp.getDataById);
// router.put('/:id', createhosp.updateById);
// router.delete('/:id', createhosp.deleteById);

module.exports = router;