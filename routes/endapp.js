import express from 'express';
const router = express.Router();
import Endapp from '../controllers/endapp'
const endapp = new Endapp();


router.post('/', endapp.endapp);
// router.get('/:id', endapp.getDataById);
// router.put('/:id', endapp.updateById);
// router.delete('/:id', endapp.deleteById);

module.exports = router;