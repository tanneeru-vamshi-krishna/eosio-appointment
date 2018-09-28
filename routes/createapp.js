import express from 'express';
const router = express.Router();
import Createapp from '../controllers/createapp'
const createapp = new Createapp();


router.post('/', createapp.createapp);
//router.get('/', appointment.get);
// router.get('/:id', createapp.getDataById);
// router.put('/:id', createapp.updateById);
// router.delete('/:id', createapp.deleteById);
// router.param('id', thread.getById)


module.exports = router;