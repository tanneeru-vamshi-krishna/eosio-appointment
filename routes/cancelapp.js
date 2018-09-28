import express from 'express';
const router = express.Router();
import Cancelapp from '../controllers/cancelapp'
const cancelapp = new Cancelapp();


router.post('/', cancelapp.cancelapp);
// router.get('/:id', cancelapp.getDataById);
// router.put('/:id', cancelapp.updateById);
// router.delete('/:id', cancelapp.deleteById);


module.exports = router;